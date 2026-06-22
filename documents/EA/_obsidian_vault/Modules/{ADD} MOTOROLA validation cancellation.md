---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Commodity/Interface Consumed/External manufacturers/Business Rules"
domain: "Modules"
element_id: 1881761
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {ADD} MOTOROLA validation cancellation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Commodity/Interface Consumed/External manufacturers/Business Rules

## 📝 Notes

{ADD PCG-5519/}
For country: IN

GetToken endpoint

QA Url: https://qa.nuralservice.com/NuralSalesAPI/api/user/GetToken 
Method - POST 
- API provides AuthKey and UserId for valid user. These authKey and userId are used in another API - see further down. 

Request-data:
{ 
    "UserName": "HomeCredit", 
    "Password": "Nural@@123",
    "AccessKey": "Motofin"
} 
200 code response with example authKey:
{ 
    "authKey": "f33e5606-beb3-41ae-9b9b-325f4e5cb9b9", 
    "userId": "21285" 
} 
Other response codes:
Status|ErrorCode|Message |

200 400 Bad Request (Missing Parameters)
200 500 Internal Server Error 
200 201 You have exceeded the login attempt count, User is blocked now, Please re-try after 24 hours or contact an 
administrator 
200 401 Invalid username or password (Unauthorized)
IMEIFinanceByHomeCredit

IMEIFinanceByHomeCredit endpoint
URL:HTTPSRoot/IMEIFinanceByHomeCredit/UserId

Method: POST

Description:
This API updates the status of a device (sold or unsold) based on the provided IMEI number in the request body.
Fields SKUCode and RetailerCode(aka PartnerCode) are optional.

Headers example - value to be fetched with above GetToken call:
authKey: 937e690e-fd5c-4a9d-94a0-1493a38827de

Request Body:
{
  "IMEI": "889977661234501",         // Mandatory, Varchar, Max length 50
  "SKUCode": "PAYA0000IN",           // Mandatory, Varchar, Max length 50
  "RetailerCode": "",                // Optional, Varchar, Max length 50
  "RequestType": "2"                 // Mandatory, Varchar, Max length 50; RequestType=0 means check IMEI status, RequestType=1 means IMEI is to be blocked or financed, RequestType=2 IMEI is to be rolled back from blocked to unblock
}

Response Body:
{
  "StatusCode": "0",
  "StatusMsg": "Valid IMEI number"
}

Response Codes and Messages:
HTTP Code | StatusCode | Message
-----------------------------------------------
200       | 0          | IMEI has been successfully blocked.
200       | 1          | Invalid IMEI number.
200       | 2          | Invalid SKUCode.
200       | 3          | Mismatch in SKU and IMEI number.
200       | 4          | No primary sales found for IMEI.
200       | 5          | Invalid request type.
200       | 6          | Invalid retailer code.
200       | 7          | IMEI does not exist with given retailer.
200       | 8          | Finance for demo stock is not allowed.
200       | 9          | IMEI already registered with customer.
200       | 10         | IMEI number already sold.
200       | 11         | IMEI number already unsold.
200       | 12         | IMEI sold to online partner, finance not allowed.
200       | 13         | IMEI is not sold by this user, so this user cannot mark it as unsold.
400       | —          | Bad Request (Missing Parameters)
401       | —          | Authentication Failed (Unauthorized / Invalid User ID / Invalid AuthKey)
500       | —          | Internal Server Error

QA URL:
https://qa.nuralservice.com/NuralSalesAPI/api/user/IMEIFinanceByHomeCredit/21285

Live URL:
(Not provided in the document at the time of making this documentation)

## 🔗 Connections (1)

- ← Dependency: [[{MOD}External validation cancellation]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Custom: PCG-5519 CBL-29530 BRIN-807 - MOTOROLA - API Integration - ANA - HoSel-Origination - Commodity Management
