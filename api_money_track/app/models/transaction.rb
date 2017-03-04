class Transaction < ApplicationRecord
  belongs_to(
    :user,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id
  )

  def self.get_by_month_and_year(user_id, date_purchased)
    year = date_purchased.split("-")[0].to_i
    month = date_purchased.split("-")[1].to_i
    transactions = User.find(User);
    unless transactions.nil? 
        transactions.select do |transaction|
          transaction_year = transaction.date_purchased.split("-")[0].to_i
          transaction_month = transaction.date_purchased.split("-")[1].to_i

          year == transaction_year && month == transaction_month
        end
    else 
      []
    end
  end
end
