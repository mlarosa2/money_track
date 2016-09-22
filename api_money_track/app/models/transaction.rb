class Transaction < ApplicationRecord
  :belongs_to(
    :user,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id
  )

  def self.get_by_month(user_id, month)
    transactions = Transaction.find_by(user_id: user_id)
    transactions.select do |transaction|
      transaction.committed.month == month
    end
  end
end
