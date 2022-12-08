class CustomersController < ApplicationController
  def index
    render json: Customer.all
  end

  def show
    customer = Customer.find_by!(id: params[:id])
    render json: customer
  end
end
