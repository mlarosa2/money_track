class AddMonthToTransactions < ActiveRecord::Migration[5.0]
  def change
    add_column :transactions, :month, :integer, null: false
  end
end
