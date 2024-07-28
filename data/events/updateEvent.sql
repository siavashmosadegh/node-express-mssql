UPDATE [dbo].[customer]
SET [customerFirstName]=@customerFirstName,
    [customerLastName]=@customerLastName
WHERE [customerID]=@customerID

SELECT *
    FROM [dbo].[customer]
    WHERE [customerID]=@customerID