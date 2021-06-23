class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :title
      t.string :description
      t.string :assignee
      t.string :reviewer
      t.string :status
      t.belongs_to :user

      t.timestamps
    end
  end
end
