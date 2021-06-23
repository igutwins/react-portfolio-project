class TasksController < ApplicationController

    def index
        tasks = {
            backlog: Task.where("status = 'Backlog'"),
            inProgress: Task.where("status = 'In Progress'"),
            forReview: Task.where("status = 'For Review'"),
            done: Task.where("status = 'Done'")
        }
        render json: tasks
    end 
    
    def create
        task = Task.create(
            title: params[:taskObj][:title],
            description: params[:taskObj][:description],
            assignee: params[:taskObj][:assignee],
            reviewer: params[:taskObj][:reviewer],
            status: params[:taskObj][:status],
            user: User.find_by(:id => params[:taskObj][:user])
        )
        render json: task
    end 

    def update
        task = Task.find_by(:id => params[:id])
        task.update(:status => params[:status])
        render json: task
    end 

end
