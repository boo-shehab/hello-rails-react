class Api::GreetingsController < ApplicationController
  def random_greeting
    message = Messages.order('RANDOM()').first
    render json: { greeting: message.content }
  end
end
