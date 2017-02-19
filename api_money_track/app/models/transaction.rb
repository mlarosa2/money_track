class Transaction < ApplicationRecord
  belongs_to(
    :user,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id
  )

  def self.get_by_month(user_id, month)
    transactions = Transaction.where({user_id: user_id, month: month})
    unless transactions.nil? 
        transactions
    else 
      return []
    end
  end
end
