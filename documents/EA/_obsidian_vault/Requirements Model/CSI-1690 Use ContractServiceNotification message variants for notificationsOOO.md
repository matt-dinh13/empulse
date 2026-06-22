---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination"
domain: "Requirements Model"
element_id: 1826922
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 CSI-1690 Use ContractServiceNotification message variants for notificationsOOO

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination

## 📝 Notes

There are currently used following ContractServiceNotification messages in the system

	
- ContractServiceReplacedSE - UC01.782 Replace Contract Service (REST API)
	
- ContractInsuranceServiceTerminatedSE - UC08.121 Terminate contract insurance common, UC11.773 Process account EOM billing finished notification
	
- ContractInsuranceServiceActivatedSE - UC11.152 Activate additionally added Insurance (CEL)
	
- ContractInsuranceServiceCanceledSE - UC08.111 Cancel contract insurance common


It is supposed to add a new ContractService notification types broadcasted by csi.contract.service exchange (RabbitMQ):

	
- ContractServiceCreatedNotification - new message type
	
- ContractServiceActivatedNotification
	
- ContractServiceCanceledNotification
	
- ContractServiceTerminatedNotification


Messages definition:
https://git.homecredit.net/product/hss-integration/-/blob/master/hss-services/hss-contractmanagement/src/main/resources/net/homecredit/hss/integration/contractmanagement/contractservice/notification/v2/xsd/ContractService.xsd

These notifications should replace the current ContractServiceChangedSE as it is planned that it will no longer be used.
ContractServiceChangedSE is generated in many UCs but only with Contract parameter.
The new ContractService notification use Contract Service identifiers and Action parameters to be be better used in next Service processing.

List of Contract Service UCs still using ContractServiceChangedSE event therefore should be updated:

	
- UC 08.096 Cancel contract service common (the UC run from UC08.095 Cancel contract service manually and UC08.292 Process Contract Service Change event)
	
- UC08.091 Terminate service common (the UC run from UC08.090 Terminate service manually and UC08.292 Process Contract Service Change event)
	
- 01.774 Create Contract Service (REST API)
	
- 08.080 Add new available service on contract
	
- 08.290 Process service operation notification


	
- UC11.126 Check client eligibility for insurance
	
- UC08.346 Add Insurance service on Contract common


No notification:

	
- 01.769 Set Contract Service status - set status ACTIVE/CANCEL (REST API)


List of Contract Insurance Service UCs using combination of ContractServiceChangedSE event and a new type of ContractServiceNotification

	
- UC08.111 Cancel contract insurance common + ContractInsuranceServiceCanceledSE (the UC is run from UC11.111 Cancel insurance contract manually and UC08.452 Cancel contract insurance service (REST API)
	
- UC08.121 Terminate contract insurance common + ContractInsuranceServiceTerminatedSE (the UC is run from UC11.121 Terminate insurance contract manually and UC08.454 Terminate contract insurance service)
	
- UC11.773 Process account EOM billing finished notification + ContractInsuranceServiceTerminatedSE


{DEL CLM-6237/}Used system properties:
GenerateTerminateInsuranceEvent{/DEL}

## 🔗 Connections (1)

- → Generalization: [[CBL-16736 General requirement]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination
