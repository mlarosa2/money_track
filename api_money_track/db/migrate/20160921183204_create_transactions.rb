class CreateTransactions < ActiveRecord::Migration[5.0]
  def change
    create_table :transactions do |t|
      t.string :name, null: false, index: true
      t.string :type, null: false
      t.date :committed, null: false
      t.float :amount, null: false
      t.timestamps
    end
  end
end
