class TransactionsController < ApplicationController
  def index
    user_id = User.find_by(session_token: params[:transaction][:session_token]).id
    @transactions = Transaction.get_by_month(user_id, params[:transaction][:month])
    render @transactions
  end

  def create
    user_id = User.find_by(session_token: params[:transaction][:session_token]).id
    @transaction = Transaction.new(transaction_params, user_id)
    if @transaction.save
      render @transaction
    else
      render json: @transaction.errors.full_messages, status: 412
    end
  end


  private
  def transaction_params
    params.require(:transaction).permit(:name, :type, :committed, :amount, :session_token, :month)
  end
end
