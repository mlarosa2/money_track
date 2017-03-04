class AddDatePurchasedToTransactions < ActiveRecord::Migration[5.0]
  def change
    add_column :transactions, :date_purchased, :string
  end
end
