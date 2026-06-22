---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-9870 (CSI-92) COP Event information - Loan Service Request JMS"
domain: "Requirements Model"
element_id: 1608420
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - LoanServiceRequest notification has to be generated also for COP service (Created, Executed, Cancelled)

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-9870 (CSI-92) COP Event information - Loan Service Request JMS

## 📝 Notes

LoanServiceRequest notification (JMS) is already generated for FER and CET requests.
Now it will be generated also for COP, but only for COP request created manually. Automatic COP without LSR is not impacted (COPExecutedSE is used in this case).

Updates:

	
- API LoanServiceRequest -> RequestParametersChoice extended by {ADD}CoolingOffPeriodRequestParameters
	
- {MOD}08.257 Create Cooling-off period request  updated to generate LoanServiceRequestCreatedSE
	
- Also 08.252 Process cooling-off period and 08.925 Cancel expired loan service requests has to be check that LoanServiceRequestExecutedSE and LoanServiceRequestCancelledSE  is generated and processed for COP

## 📊 Appears In (1 diagrams)

- Custom: CBL-9870 (CSI-92) COP Event information - Loan Service Request JMS
