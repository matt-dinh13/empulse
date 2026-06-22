---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Payments/Refunds/Refund management/Business Rules"
domain: "Analysis Model"
element_id: 1877704
diagrams: 5
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Create refund order rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Refunds/Refund management/Business Rules

## 📝 Notes

There is described a rule for creation Refund Order here
Input:
Mandatory

	
- list of RefundItems   


Optional:

	
- Comment 
	
- Time to delivery from


	
- Time to delivery to


	
- Identification document type  
	
- Identification document number  
	
- Contact cell phone
	
- Client full name 
	
- Client address 


Pre-condition:
No one of passed RefundItems has relation on RefundOrder where ActiveFlag = true.

Steps:
RefundOrder object is created as follow:

	
- Code = code from sequence (e.g. DB sequence)


	
- Active flag = true
	
- Creation date = current date and time


and its attributes are set according to the input:

	
- Comment = Comment
	
- Time to delivery from = Time to delivery from
	
- Time to delivery to = Time to delivery to
	
- Identification document = Identification document type


	
- Identification document number = Identification document number


	
- Contact cell phone = Contact cell phone


	
- Client full name  = Client full name 
	
- Client address  = Client address

## 🔗 Connections (1)

- → Dependency: [[REQ#4 Processing outgoing payments for refunds]]

## 📊 Appears In (5 diagrams)

- Custom: Business Rules
- Use Case: {DEL}Creating Refunds automatically
- Use Case: Processing outgoing payments for refunds
- Use Case: Refunds management
- Use Case: REL Creating Refunds on request
