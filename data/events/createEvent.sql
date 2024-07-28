INSERT INTO [dbo].[customer]
    (
        [customerFirstName],
        [customerLastName]
    )
VALUES (
    @customerFirstName,
    @customerLastName
)

SELECT SCOPE_IDENTITY() AS customerID