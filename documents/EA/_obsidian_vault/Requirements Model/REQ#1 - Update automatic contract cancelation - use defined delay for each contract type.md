---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9228 (CLM-2854) Remove Functionality of Cancelling Contract's with Outgoing Payment Status Not Delivered"
domain: "Requirements Model"
element_id: 1508057
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - Update automatic contract cancelation - use defined delay for each contract type

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9228 (CLM-2854) Remove Functionality of Cancelling Contract's with Outgoing Payment Status Not Delivered

## 📝 Notes

Goal of this task is modification of the current UC {MOD}01.445 Cancel undisbursed contract  so that the cancellation of contract is configurable, i.e. the cancellation of these contracts can be switched-off. 

It should be possible to:

	
- define contract type to be cancelled (CEL/SAI/REL)
	
- introduce a time limit when contract will wait for cancellation


Why: Business needs to check a reason why client doesn't receive money by an operator. It can be caused by wrong account and there will be a chance to correct it and do not lose sales due to cancelled contracts.

New global parameters are created which define possible delay in days for cancellation from ConditionRejected date (if negative value is used then cancellation is switched off for the contract type):
CancelUndisbursedDelay_CEL  (default =0)
CancelUndisbursedDelay_SAI  (default =0)
CancelUndisbursedDelay_REL  (default =0)

For ID:
CancelUndisbursedDelay_CEL = -1
CancelUndisbursedDelay_REL = -1

For IN:  TBD
CancelUndisbursedDelay_CEL = -1

## 📊 Appears In (1 diagrams)

- Custom: CBL-9228 (CLM-2854) Remove Functionality of Cancelling Contract's with Outgoing Payment Status Not Delivered
