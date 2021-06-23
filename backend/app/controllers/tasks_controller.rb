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
            title: params[:title],
            description: params[:description],
            assignee: params[:assignee],
            reviewer: params[:reviewer],
            status: params[:status],
            user: 1
        )
        render json: task
    end 

end
