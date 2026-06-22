---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Analytical Model/Access Rights"
domain: "Modules"
element_id: 1872757
diagrams: 7
connections: 11
tags:
  - usecase
  - modules
---

# 🎯 {MOD}16.010 Request for a loan service

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Analytical Model/Access Rights

## 📝 Notes

This use case presents a method for receiving a request for "loan service" business case interpreting and its validation. If the request is valid, the method starts the processing of the business case.
There are only validated the provided related subjects (contract, account, client ) and application code. Based on provided parameters (contract/account), system decides if an Account need to be created first, or other type of processing is chosen.
Keep in mind, the method is able process only one application (ADS record) in one call.

API call example:
POST ../service-interpreter/process-loan
{
  "applicationCode": "string",
  "relatedSubjects": [
    {
      "code": "string",
      "value": "string"
    }
  ],
  "sourceSystem": {
     "sourceRequestId": "string",
     "sourceSystem": "string"
  }
}

## 🔗 Connections (10)

- ← Dependency: [[{ADD}service-interpreter (Interface 1839904)]]
- ← UseCase: [[External System (Actor 1872464)]]
- → Usage: [[SIR - Get Contract Supplement by code from SUP]]
- → Dependency: [[SIR - Get Application data by code from ADS (Requirement 1872720)]]
- → UseCase «invoke»: [[{ADD}16.022 Process Sales Quotes for Transaction]]
- → Dependency: [[SIR - Get Account status by account number from AM (Requirement 1872726)]]
- → Dependency «invokes»: [[{MOD}16.020 Process request for a loan]]
- → Dependency: [[SIR - Get Contract by code from COMA]]
- → Dependency: [[SIR - Get Sales Quotes by codes from SQS (Requirement 1872724)]]
- → Realisation: [[{ADD}16.010 Request for a loan transaction service (Requirement 1839862)]]

## 📊 Appears In (7 diagrams)

- Custom: Access Rights
- Logical: SIR - Process a request for a loan
- Use Case: Account origination - Use Case Model
- Use Case: SIR - Add Contract and Account creation steps into processing - use cases
- Use Case: SIR - Process Sales Quotes for Transaction
- Use Case: SIR - Update process-loan API method - use cases
- Use Case: Transaction origination - Use Case Model
