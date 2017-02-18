class RemoveCommittedFromTransactions < ActiveRecord::Migration[5.0]
  def change
    remove_column :transactions, :committed, :date
  end
end
