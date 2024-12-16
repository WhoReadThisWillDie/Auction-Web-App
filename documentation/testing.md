# Testing

## Test plan

### Test case 1

Description: User can view all laptops both logged in and not logged in

### Test case 2

Description: User can view all auctions both logged in and not logged in

### Test case 3

Description: User can filter auction by end date, min and max price, name of the laptop

### Test case 4

Description: User can view laptop details by clicking on the laptop card

### Test case 5

Description: User can view auction details by clicking on the auction card

### Test case 6

Description: User can view the bids placed by him and the bids placed by other users

### Test case 7

Description: User can place a new bid on an auction if it is not finished yet. Bid data is validated before placing a
bid

### Test case 8

Description: User can win an auction if it is finished

### Test case 9

Description: User can view the auctions he won

### Test case 10

Description: User can log out and log in again

### Test case 11

Description: User can register a new account. Once the account is created, the user is redirected to the laptops page

### Test case 12

Description: Admin can create a new laptop. Laptop data is validated before creating a laptop

### Test case 13

Description: Admin can edit a laptop. Laptop data is validated before editing a laptop

### Test case 14

Description: Admin can delete a laptop. Laptop data is validated before deleting a laptop

### Test case 15

Description: Admin can create a new auction. Auction data is validated before creating an auction

### Test case 16

Description: Admin can edit an auction. Auction data is validated before editing an auction

### Test case 17

Description: Admin can delete an auction. Auction data is validated before deleting an auction

## Test report

Completed: 15.12.2024

Completed by: Maksim Sadkov

The testing was carried out by the means of: Postman, HTTP calls, Manual testing

## Traceability matrix

### Functional

The table below shows an overview of which test covers which functional requirements

| Test | F1 | F2 | F3 | F4 | F5 | F6 | F7 | F8 | F9 | F10 | 
|:----:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:---:|
|  T1  | X  | X  |    |    |    |    |    |    |    |     |
|  T2  | X  | X  |    |    |    |    |    |    |    |     |
|  T3  |    |    | X  |    |    |    | X  |    |    |     |
|  T4  |    | X  |    |    |    |    |    |    |    |     |
|  T5  |    | X  |    |    |    |    |    |    |    |     |
|  T6  |    | X  |    |    |    |    |    |    |    |     |
|  T7  |    |    |    | X  | X  | X  |    |    | X  |     |
|  T8  |    |    |    |    |    |    |    |    |    |     |
|  T9  |    |    |    |    |    |    |    |    |    |     |
| T10  |    |    |    |    |    |    |    |    |    |     |
| T11  |    |    |    |    |    |    |    |    |    |     |
| T12  |    |    |    |    | X  | X  |    |    |    |  X  |
| T13  |    |    |    |    | X  | X  |    |    |    |  X  |
| T14  |    |    |    |    | X  | X  |    |    |    |  X  |
| T15  |    |    |    |    | X  | X  |    |    |    |  X  |
| T16  |    |    |    |    | X  | X  |    |    |    |  X  |'
| T17  |    |    |    |    | X  | X  |    |    |    |  X  |

### Non funtional

The table below shows an overview of which test covers which non-functional requirements

| Test | NF1 | NF2 | NF3 | NF4 | NF5 | NF6 | NF7 | NF8 | NF9 | NF10 | NF11 | NF12 | NF13 | NF14 | NF15 | NF16 | NF17 | NF18 | NF19 | 
|:----:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:----:|:----:|:----:|:----:|:----:|:----:|:----:|:----:|:----:|:----:|
|  T1  |     |     |     |     |     |     |     |     |     |      |      |      |      |      |      |      |      |      |      |
|  T2  |     |     |     |     |     |     |     |     |     |      |      |      |      |      |      |      |      |      |      |
|  T3  |     |     |     |     |  X  |     |     |     |     |      |      |      |      |      |      |      |      |      |      |
|  T4  |     |     |     |     |     |     |     |     |     |      |      |      |      |      |      |      |      |      |      |
|  T5  |     |     |     |     |     |     |     |     |     |      |      |      |      |      |      |      |      |      |      |
|  T6  |     |     |     |     |     |     |     |     |     |      |      |      |      |      |      |      |      |      |      |
|  T7  |     |     |     |     |     |     |     |  X  |     |      |      |      |      |      |      |      |      |      |      |
|  T8  |     |     |     |     |     |     |     |     |     |      |      |      |      |      |      |      |      |      |      | 
|  T9  |     |     |     |     |     |     |     |     |     |      |      |      |      |      |      |      |      |      |      |
| T10  |     |     |     |     |     |     |     |     |     |      |      |      |      |      |      |      |      |      |      |
| T11  |     |     |     |     |     |     |     |     |     |      |      |  X   |      |      |      |      |      |      |      | 
| T12  |     |     |     |     |     |     |     |  X  |     |      |      |      |      |      |      |      |      |      |      |
| T13  |     |     |     |     |     |     |     |  X  |     |      |      |      |      |      |      |      |      |      |      |
| T14  |     |     |     |     |     |     |     |  X  |     |      |      |      |      |      |      |      |      |      |      | 
| T15  |     |     |     |     |     |     |     |  X  |     |      |      |      |      |      |      |      |      |      |      |
| T16  |     |     |     |     |     |     |     |  X  |     |      |      |      |      |      |      |      |      |      |      |
| T17  |     |     |     |     |     |     |     |  X  |     |      |      |      |      |      |      |      |      |      |      |


