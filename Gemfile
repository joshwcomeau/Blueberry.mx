source 'https://rubygems.org'

# Default Rails gems
gem 'rails', '4.1.2'
gem 'pg'
gem 'sass-rails', '~> 4.0.3'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.0.0'
gem 'jquery-rails'
gem 'jbuilder', '~> 2.0'
gem 'sdoc', '~> 0.4.0',           group: :doc
gem 'spring',                     group: :development

# Custom gems
gem 'angular-rails-templates'
gem 'bourbon'           # Sass augmenter
gem 'bower-rails'       # Front end package manager
gem "foreman"           
gem 'neat'              # Semantic grid system
gem 'quiet_assets'

group :production, :staging do
  gem "rails_12factor"
  gem "rails_stdout_logging"
  gem "rails_serve_static_assets"
end

group :test, :development do
  gem 'capybara'
  gem 'database_cleaner'
  gem 'factory_girl_rails'
  gem 'rspec'
  gem 'rspec-rails' # Unit testing
  gem 'selenium-webdriver'
end

