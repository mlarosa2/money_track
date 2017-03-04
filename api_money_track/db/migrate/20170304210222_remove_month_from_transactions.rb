class RemoveMonthFromTransactions < ActiveRecord::Migration[5.0]
  def change
    remove_column :transactions, :month, :integer
  end
end
