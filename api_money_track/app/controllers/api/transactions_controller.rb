class Api::TransactionsController < ApplicationController
  def index
    params.permit(:session_token, :date_purchased)
    user_id = User.find_by(session_token: params[:session_token]).id
    @transactions = Transaction.get_by_month_and_year(user_id, params[:date_purchased])
    
    render :index
  end

  def create
    user_id = User.find_by(session_token: params[:transaction][:session_token]).id
    @transaction = Transaction.new({:name => params[:transaction][:name], :kind => params[:transaction][:kind], :amount => params[:transaction][:amount], :user_id => user_id, :date_purchased => params[:transaction][:date_purchased]})
    if @transaction.save
      render @transaction
    else
      render json: @transaction.errors.full_messages, status: 412
    end
  end

  def update
    user_id = User.find_by(session_token: params[:transaction][:session_token]).id
    @transaction = Transaction.find(params[:id])

    if @transaction.update({:name => params[:transaction][:name], :kind => params[:transaction][:kind], :amount => params[:transaction][:amount], :user_id => user_id, :date_purchased => params[:transaction][:date_purchased]})  
      render @transaction
    else
      render json: @transaction.errors.full_messages, status: 412
    end
  end

  def destroy 
    @transaction = Transaction.find(params[:id])
    user_id = User.find_by(session_token: params[:session_token]).id
    transaction = @transaction

    unless user_id.nil?
      if @transaction.destroy
        render json: transaction
      else 
        render json: @transaction.errors.full_messages, status: 412
      end
    end
  end

  private
  def transaction_params
    params.require(:transaction).permit(:id, :name, :kind, :amount, :session_token, :date_purchased)
  end
end
