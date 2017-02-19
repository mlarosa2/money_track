class Api::TransactionsController < ApplicationController
  def index
    params.permit(:session_token, :month)
    user_id = User.find_by(session_token: params[:session_token]).id
    @transactions = Transaction.get_by_month(user_id, params[:month])
    render :index
  end

  def create
    user_id = User.find_by(session_token: params[:transaction][:session_token]).id
    @transaction = Transaction.new({:name => params[:transaction][:name], :kind => params[:transaction][:kind], :amount => params[:transaction][:amount], :user_id => user_id, :month => params[:transaction][:month]})
    if @transaction.save
      render @transaction
    else
      render json: @transaction.errors.full_messages, status: 412
    end
  end


  private
  def transaction_params
    params.require(:transaction).permit(:name, :kind, :amount, :session_token, :month)
  end
end
