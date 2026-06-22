---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-25279 (CSI-3642) Automated Tagging for Standalone Insurance contracts into Cancelled Status"
domain: "Requirements Model"
element_id: 1834700
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 Cancel Insurance Contract

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-25279 (CSI-3642) Automated Tagging for Standalone Insurance contracts into Cancelled Status

## 📝 Notes

Scenario
1. Loxon monitors all contracts and checks whether the first installment is repaid within 5 days after a contract has been signed
2. IF the first installment is not repaid 
   THEN loxon sends payOffRequest message to RabbitMQ with the following request body:
           accountNumber
           Payoffday
           reasonCode = CANCEL
   AND use case continues with the next step
   ELSE use case ends
3. System reads a message with reasonCode = CANCEL from RabbitMQ
4. IF there is any message
   THEN use case continues with the next step
   ELSE  use case ends
5. System checks the contract status
6. IF the contract has signed or active status
   THEN  system calls REST API COMA POST /rest/v12/contracts/{ PayOffRequest.accountNumber }/cancel and request body { cancellationReason : "OVERDUE" }
   ELSEIF contract has cancel status
   THEN resultCodeOfcancellation = ALREADY_CANCELLED
   ELSE resultCodeOfcancellation = ERROR
7. System sends payOffResponse message to rabbitMQ with the following response body:
         accountNumber = payOffRequest.accountNumber
         resultCode = resultCodeOfcancellation 
         Loxon read a message from RabbitMQ

 
To implement:
1. Add a new value CANCEL into reasonCode enum for payOffRequest

2. Add a new value ALREADY_CANCELLED into reasonCode enum for payOffResponse

3. Add a condition into use case 01.501 Pay-off CEL contract from external system
               IF Contract.Contract Type = CEL and payOffRequest.reasonCancel = CANCEL THEN system calls REST API COMA POST /rest/v12/contracts/{ PayOffRequest.accountNumber }/cancel and request body {cancellationReason : "OVERDUE" }

4. Add a condition into business rule Check pay-off possibility algorithm (GUI/RMQ)
              IF Contract.Contract Type = CEL AND contract is in status cancel THEN ResultCode = CONTRACT_ALREADY_CANCELLED

## 📊 Appears In (1 diagrams)

- Custom: CBL-25279 (CSI-3642) Automated Tagging for Standalone Insurance contracts into Cancelled Status
