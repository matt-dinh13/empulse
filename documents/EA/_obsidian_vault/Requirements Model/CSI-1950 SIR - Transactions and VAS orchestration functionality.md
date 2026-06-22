---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination"
domain: "Requirements Model"
element_id: 1826918
diagrams: 1
connections: 5
tags:
  - requirement
  - requirements-model
---

# 📋 CSI-1950 SIR - Transactions and VAS orchestration functionality

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination

## 📝 Notes

initial validation of the request:
ADS application code exists
Getting sales quotes (must exist at least one)
Evaluate master transaction: get SQS.purpose + SQS.transactionType of all sales quotes related to application. Get SupplementSetting by the find purposes (nutne vytvorit API pro GET Supplements) - pro ten typ procesu na master trn by stacilo najit kombinaci EPP purpose & transaction type RPD
Add master transaction to the transaction supplement. The transaction can already be realized in the past. This info should be mentioned in the request!
Identify parent sales quote: parent bude odkazovat sám na sebe a child pak na parenta
Processing of remaining Sales Quotes:
- get Service setting from Serv Catalog?
- - the service is an insurance service
- - - add service to the ContractService
- - - create Insurance Contract
- - - sales quote payment channel (except master sales quote and disbursement) - for insurance, it is needed to create it based on insurance program data
- - - add SQ to Transact Supplement
- - the service is a loan service
- - - add service to the ContractService
- - - add SQ to Transact Supplement
All Sales Quotes processed: 
- autorizace vsech transakci, ktere maji byt autorizovany (v pripade IN to budou vsechny; fees se nebudou aplikovat): Authorize transactions on TransactionSupplement API -> new API
- notifikace, ze procesing SQ je dokoncen -> konzumuje TransactionSupplement: check zda je treba vyrobit tisky a pak uz standardni "prepare doc"??
- nebo zavolat TransactionSupplement API create documents, kde pak pokracuje standardni "prepare doc"?? V pripade, ze dokumentace se negeneruje, bude potreba odeslat notifikaci TransactionSupplement Approved.
Tady SIR cast procesu konci.
Dalsi pokracovani v Contract Supplement casti:
- call CSI transaction-supplement/acceptation --> perform Confirm all transaction in authorized state 

Getting sales quotes from new Service catalogue call example:
https://sqs.vn00a1.cz.infra/api/salesQuotes/search/findByCodeIn?codes=e498bb16-4a03-5f84-e053-2638810a02a1,e498d8f4-1e2c-63e9-e053-2638810acb53

## 🔗 Connections (3)

- → Dependency: [[CSI-1741 - A new method for Sales Quote adding to TransactionSupplement (Requirement 1826913)]]
- → Dependency: [[CSI-1777 - Create a method for getting Supplement setting (Requirement 1826911)]]
- → Generalization: [[CBL-16736 General requirement]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination
