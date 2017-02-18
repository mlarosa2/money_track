class Transaction < ApplicationRecord
  belongs_to(
    :user,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id
  )

  def self.get_by_month(user_id, month)
    transactions = Transaction.find_by(user_id: user_id)
    unless transactions.nil? 
     return  transactions.select do |transaction|
        transaction.month == month
      end
    else 
      return []
    end
  end
end
