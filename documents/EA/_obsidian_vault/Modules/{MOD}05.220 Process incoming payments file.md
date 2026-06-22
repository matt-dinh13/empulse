---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Import incoming payments/Use Case Model"
domain: "Modules"
element_id: 1875364
diagrams: 1
connections: 3
tags:
  - usecase
  - modules
---

# 🎯 {MOD}05.220 Process incoming payments file

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Import incoming payments/Use Case Model

## 📝 Notes

System calls this asynchronous use case to upload and processing incoming payments file. 
System uploads file from external storage or receives data from provided web service and performs formal and business validations.
If the file passes all validations, system creates incoming payment records in the system. These payments are in "blocked" status and it is not possible to perform any operation with them until the file is confirmed and processed (see 05.290 Confirm incoming payment file use case)
Having a validation failed, system rejects the entire file and user who runs the action is noticed about the problem by receiving a message to the system inbox.
After successful processing of the file, user who starts this process is noticed about import results by receiving a message to the system inbox or like ansynchonous answer to external webservice in case that it is automatic import - see Incoming payment file import message structure

## 📊 Appears In (1 diagrams)

- Use Case: Import incoming payments
