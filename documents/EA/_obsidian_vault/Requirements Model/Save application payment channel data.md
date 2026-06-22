---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-8421 LOR - remove KZ custom behavior of BSL/LOR-8989 - Remove InitiateEvaluationRequest functionality"
domain: "Requirements Model"
element_id: 1827649
diagrams: 2
connections: 11
tags:
  - requirement
  - requirements-model
---

# 📋 Save application payment channel data

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-8421 LOR - remove KZ custom behavior of BSL/LOR-8989 - Remove InitiateEvaluationRequest functionality

## 📝 Notes

This object describes the steps, how system saves the data of the payment channel (with the specific purpose) from the application.

Input:
- ApplicationCode = unique identifier of the application
- PaymentChannelPurpose = purpose of the payment channel
- PaymentChannelData = relevant data of the payment channel to be saved

Output:
- ErrorCode (optional) = code of the error, when some technical issues occur during the performed steps

Steps:

	
- System takes the ApplicationCode and PaymentChannelPurpose from the input and gets the data of the corresponding application's payment channel according to the rule Get application payment channel by its purpose with respective parameters on the input.
In case of failure (i.e. when ErrorCode is returned on the rule's output), system returns the respective ErrorCode to the calling object and algorithm ends.
	
- Based on whether the payment channel with the respective purpose already exists on the processed application (i.e. data of such payment channel were returned within the previous step) or not, system proceeds as follows:

2.1.  If the payment channel does not exist yet, system creates a new one according to the rule Create application payment channel with ApplicationCode, PaymentChannelPurpose and PaymentChannelData on the input.
2.2.  If the payment channel already exists, system updates it according to the rule Update application payment channel with ApplicationCode, respective PaymentChannelID and PaymentChannelData on the input.

In case of failure (i.e. when ErrorCode is returned on the rule's output), system returns the respective ErrorCode to the calling object.
	
- Algorithm ends.

## 🔗 Connections (11)

- ← Dependency: [[01.421 Create application DDM (UseCase 1818674)]]
- ← Dependency: [[01.080 Fill in application (UseCase 1821367)]]
- ← Dependency: [[Application Processing]]
- → Dependency: [[Create application payment channel]]
- → Dependency: [[Update application payment channel]]
- → Dependency: [[Get application payment channel by its purpose]]
- ← Dependency: [[01.158 Accept offer (UseCase 1827719)]]
- ← Dependency: [[{MOD}01.314 Create application externally]]
- ← Dependency: [[{MOD}01.098 Update and evaluate application v9]]
- ← Dependency: [[{MOD}01.310 Update application v9]]
- ← Dependency: [[01.095 Create and evaluate application]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-8989 - Remove InitiateEvaluationRequest functionality
- Custom: Operations with application payment channels
