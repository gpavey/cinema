get '/' do
  erb :index
end

get '/locations' do
  movies = Movie.all
  content_type :JSON
  movies.to_json
end

get '/movies' do
  movies = Movie.where(params)
  content_type :JSON
  movies.to_json
  # redirect '/'
end

# get '/dates/' do
#   dates = Movie.select(:release_date).distinct
#   content_type :JSON
#   dates.to_json
# end