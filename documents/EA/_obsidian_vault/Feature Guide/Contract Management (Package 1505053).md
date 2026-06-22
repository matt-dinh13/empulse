---
type: Package
stereotype: "feature"
package: "HomerSelect/BSL/Feature Guide/CLM"
domain: "Feature Guide"
element_id: 1505053
diagrams: 1
connections: 0
tags:
  - package
  - feature-guide
---

# 📁 Contract Management

> **Type**: Package · **Stereotype**: «feature»
> **Package**: HomerSelect/BSL/Feature Guide/CLM

## 📝 Notes

- Contract search
- Contract registration (activation)
- Registration queue
- Contract detail history
- Contract payment channel
- Contract commodity
- Contract finishing (manual, automatic)
- Contract Pay off
- Contract Sold off
- Contract Write-off

## Contract search

User is able to search for contract based on different criteria. There are prepared criteria for search and custom search as well.

## Contract registration

Register (activate) Contract is done by: 
- checking presence of all documents (in real),
- marking checkbox for all documents
- clicking on button **Register contract** (active when all documents are checked and
   no critical mistakes)
- status of contract changed to **Active** (for Cash loan registration, disbursement of
  the client is checked as next needed condition for the contract activation)

If not all documents are present, or a mistake is found:

- User can create mistake ticket with some type of criticality via button Record mistake
- Change state of recorded document mistakes - this is performed through clicking on a **Set ticket state button**.
- Or Save information to store checkbox state for next check (This possibility means no status change is happen to contract)

While activating contract, system updates clients data to CIF (depends on system setting - original data was sent do CIF while evaluation process after Fill In Application.
Also while activating contract and based on the system setting, system can generate outgoing payments to Salesroom (retailer)

## Registration queue
- used to support of the Registration process when the required credit documentation is checked on completeness and correctness. Contract registration is one of the conditions for the contract activation. 

When function Register contract is used, system display list of documents related to contract to be checked by user - to check all these documents are present. User can use barcode scanner for check presence of document.

## Contract detail history
- displays contract status history containing: contract events, business events,
  contract status requests, contract status history
- The most important date/time stamps contract events. For example: Date of last change, Send to identification, Prepared to Sign etc.
- Business events and its details. For example: Create application, create contract, choose offer etc.
- History of contract regarding its status

## Contract detail payment channels
- contains all the important information about financial parameters for current contract like Payment channel, Credit Amount, Total payment, Outstanding principal, Annuity, etc.

Payment channel contains also information about Fees / Services and information about contract disbursement.

User has the option to view Installment schedule for current contract (button Installment schedule), open Debt catalogue details (button Deb Catalogue detail) or change repayment channel (button Change repayment channel).

## Contract detail commodity
- contains information about purchased commodity relevant for contract. System also allows editing (i.e. Serial number, color, IMEI etc…) based on some rules.

## Contract detail block payment
- if it is enabled, no  outgoing payments will be generated for this contract (or becomes Blocked if already Unpaid). Payments could be again allowed.

## Contract finishing
- Contract management provides many different ways how to support contract finishing during its lifecycle.

Requirements for finishing contract: 

- contract with status active or paid off 
- contract has all installments paid 
- actual date is later than last date of installment 

If these conditions are fulfilled than daily job setup contract's status to finished.
There is also possibility to manually finish the contract if all the conditions are met via button Finish contract on contract detail screen.

Manual Cancel
- User has possibility to manually cancel the contract if correct requirement are met. 
When clicking on Cancel contract button Cancel contract window is displayed. 
User needs to choose Reason for cancellation to be able to proceed with the cancellation. 
After confirming the cancellation if validation are met, contract status will be Cancelled.

Automatic cancel
- Contracts can be cancelled automatically via system. Purpose of this automatically canceling is to find contracts that are too long in status "In process" and cancel them.
Examples: 

- Contract sent to CIF - system CIF didn't return the result for longer then specified time.
- Contract sent to LAP - system LAP didn't return the result for longer then specified time.
- Approved contracts - customer is no longer interested in contract

System searches for contracts to cancel regularly. How often is set by system parameter.

## Pay off
- BSL is able to set contract to Paid-off status manually. It is available only if requirement are met.
Pay off is otherwise driven by LCS system. Pay off contract button is available directly on each contract detail, if requirements are met.

Plan Pay off
- Support for collective pay off via xml file. Plan Pay-off of Contracts allows you to plan job for processing of file with contracts to be paid-off.  In the main menu click the Plan pay off of contracts icon in the Contract management column.

## Sold off
Possibility to sold off the contract via xml file import. It is available on BSL home page.

## Contract write off
- supports the loan amortization (write-off), mainly bad debts.

The process starts by a selection of contracts suitable to WO. Nowadays, this part of the process if supported by DWH. As soon as the contracts are chosen in the DWH, user can plan start of the process which is subsequently run at required time.

DWH notifies CLM (BSL) about the snapshot with chosen contract is prepared (via WS). The CLM starts processing after the needed data (contracts) is downloaded from DWH.

The CLM validate all contracts in the request if the WO can be performed. If a contract does not fulfill the WO condition, it is excluded from the WO.

If the validation finds a contract termination is needed, or due date of termination has to be changed, the system ensures that these contracts are terminated (paid-off) to WO date, i.e. it calls the Pay-off installment schedule and the Regenerate installment schedule function (functions provided by IS).

For every successfully validated contract, particular installment parts amounts to WO are calculated (amounts for principal, interest, fees, penalties) - this part is ensured by IS.

Finally, for the contracts prepared to WO, set of next operation can be performed according the setting:

Repayment of the contract debt in case that the loan repayment is required (Deficits and damages payment type is used to cover the debt)

Change status of written-off contract

This write-off data (the contracts) is subsequently consumed and processed by BOOK system for the billing.

## 📊 Appears In (1 diagrams)

- Package: CLM
