class AddTitleToSessions < ActiveRecord::Migration[6.0]
  def change
    add_column :sessions, :title, :string
  end
end
