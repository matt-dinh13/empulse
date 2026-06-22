---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-21184 (CSI-2626) EMI VAS Cancellation & Termination"
domain: "Requirements Model"
element_id: 1762602
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 CSI-2626 EMI VAS Cancellation & Termination

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-21184 (CSI-2626) EMI VAS Cancellation & Termination

## 📝 Notes

Required functions for EMI transaction support

	
- Cancellation post confirmation (a request processed by Transaction Supplement API as refund). In case of refund of main commodity associated VAS also need to be cancelled
	
- FER of main commodity (a FER request is processed by AM). In case of FER of main commodity, termination of the dependent VAS like SafePay should also happen automatically


Notices to usage in business cases related to Transaction Supplements:

	
- Client can cancel a VAS (related to Transaction Supplement) in "free-look" period -> the VAS cancellation can be done either via BSL Contract detail Insurance tab or ContractService API. The AM will receive ContractService notification with reference to VAS transaction and performs appropriate action on the account
	
- Client can terminate a VAS (related to Transaction Supplement) after "free-look" period -> the VAS termination can be done either via BSL Contract detail Insurance tab, or ContractService API. The AM will receive ContractService notification with reference to VAS transaction and performs appropriate action on the account
	
- Client asks for FER of defined transaction -> A FER request is created in AM. After client repays required amount, AM regenerates IP and sent notification. The notification is processed by SIR which terminates the related VAS(es)
	
- Client returns the purchased goods -> Transaction Supplement/refund is called. System asks for cancellation of all transactions related to the Transaction Supplement in the AM. After processing the request in AM, Transaction Supplement is set to REFUNDED status and appropriate notification is sent. The notification is processed by SIR which ensures termination of related VAS


Expected scope on CSI side (20MDs):

	
- extend the current Transaction Supplement refund function so that be able process cancellation of more transactions in AM (UC13.112 Refund Transaction Supplement + UC13.114 Process transaction cancellation request)
	
- SIR should be able to process REFUND notification (from BSL) in order to terminate VAS(s) related to the Transaction Supplement (update UC16.030 Process Transaction Supplement notification). Related VAS means only goods insurance where commodity from "main" purchase transaction is insured. 
The VAS is cancelled/terminated based on rules defined in the VAS setting. The new Service Catalogue will be extended with some new parameters (ensured by PCG). These new parameters will be evaluated on the VAS cancellation and termination request:
- Manual cancellation allowed/Manual termination allowed
- Cancellation offset/Termination offset
- affected use cases of standard Services: UC08.495 Cancel Contract Service externally, UC08.490 Terminate Contract Service externally, 08.090 Terminate Contract Service manually, 08.095 Cancel contract service manually - there will be needed the mentioned UCs to be able process definitions from the new Service Catalogue
- affected use cases of Insurance Services: shared validation rule of "Check conditions to insurance termination" - Manual cancellation allowed/Manual termination allowed parameters from the new Service Catalogue mapping and evaluation
	
- SIR should be able to process "FER" notification (from AM) in order to terminate VAS(s) related to the Transaction Supplement. New use case - similar function is presented by UC13.300 Process AM EventInfo notification (RMQ exchange of am.headers.event.notification).
There are two event types of the "FER" notifications: 
- FER_IP - standard FER outside free look period (like CEL COP)
- FER_IP FREE_LOOK - FER in the free look period (possible loan cancellation for defined number of days after the transaction is confirmed)
Notice - it will be needed to extend EventInfoDto with "transactionSupplementId" attribute


Open questions:

	
- what about other type of insurance which doesn't insure a commodity (e.g. life insurance)? ->The VAS cancellation/termination is only driven by Service setting
	
- regarding "Client returns the purchased goods" variants of the solution:
- Transaction Supplement refund only cancels the "main" transaction; SIR terminates VAS based on TransactionSupplementRefunded notification; VAS transaction(s) is cancelled based on ContractService notification in AM
- Transaction Supplement refund cancels all transactions in AM. Next steps are the same like for previous variant but AM cannot cancel VAS transaction.

## 📊 Appears In (1 diagrams)

- Custom: CBL-21184 (CSI-2626) EMI VAS Cancellation & Termination
