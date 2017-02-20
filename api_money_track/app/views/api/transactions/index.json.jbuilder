json.array! @transactions do |transaction|
    json.partial! 'transaction', locals: { transaction: transaction }
end
