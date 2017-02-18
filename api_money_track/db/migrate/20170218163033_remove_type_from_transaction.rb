class RemoveTypeFromTransaction < ActiveRecord::Migration[5.0]
  def change
    remove_column :transactions, :type, :integer
  end
end
