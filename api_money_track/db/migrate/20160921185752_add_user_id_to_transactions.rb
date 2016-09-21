class AddUserIdToTransactions < ActiveRecord::Migration[5.0]
  def change
    add_column :transactions, :user_id, :integer
    add_foreign_key :transactions, :users
  end
end
