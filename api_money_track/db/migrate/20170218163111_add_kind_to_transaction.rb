class AddKindToTransaction < ActiveRecord::Migration[5.0]
  def change
    add_column :transactions, :kind, :integer, null: false
  end
end
