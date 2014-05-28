get '/' do
  erb :index
end

get '/locations' do
  @movies = Movie.all
  content_type :JSON
  @movies.to_json
end