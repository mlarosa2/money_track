json.user do
  json.user user.id
  json.email user.email
  json.session_token user.session_token
end
