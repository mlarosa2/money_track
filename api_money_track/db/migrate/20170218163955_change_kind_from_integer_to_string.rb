class ChangeKindFromIntegerToString < ActiveRecord::Migration[5.0]
  def change
    change_column :transactions, :kind, :string
  end
end
