# This file is used by Rack-based servers to start the application.

require_relative 'config/environment'

use Rack::Cors do
  allow do
    origins 'localhost:3000', 'localhost:8000'
    resource '/file/list_all', :headers => 'x-domain-token'
    resource '/file/at/*',
      :methods => [:get, :post, :delete, :put, :patch, :options, :head],
      :headers => 'x-domain-token',
      :expose  => ['application/json'],
      :max_age => 600
  end

  allow do
    origins '*'
    resource '/public/*', :headers => :any, :methods => :get
  end
end
run Rails.application
