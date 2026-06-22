---
tags: [index, bsl-model]
---

# 🏛 BSL Model Index

> Auto-generated from Enterprise Architect export
> Elements: **35742** · Connectors: **33516** · Diagrams: **5709**

## Domains

### 📁 Actors (18 elements)

- 👤 [[CaBus-CMS]] (18 connections)
- 👤 [[CIF (Actor 1880899)]] (18 connections)
- 👤 [[Loan Origination (Actor 1880864)]] (10 connections)
- 👤 [[Print Server (Actor 1880896)]] (10 connections)
- 👤 [[TCK (Actor 1880875)]] (8 connections)
- 👤 [[Cabinet (Actor 1880880)]] (6 connections)
- 👤 [[Contract Management (Actor 1880867)]] (5 connections)
- 👤 [[Commodity module (Actor 1880894)]] (4 connections)
- 👤 [[Incoming payment module]] (3 connections)
- 👤 [[Message Server (Actor 1880887)]] (3 connections)
- *...and 8 more*

### 📁 Analysis Model (14100 elements)

- 📋 [[Mandatory (Requirement 1789779)]] (336 connections)
- 📄 [[Mandatory (Action 1789793)]] (211 connections)
- 📋 [[Optional]] (94 connections)
- 🎯 [[{MOD}01.210 Show contract detail]] (76 connections)
- 🔷 [[Address]] (66 connections)
- 🔶 [[CardManagementWS]] (60 connections)
- 🔶 [[ApplicationManagementWS_v22 (Interface 1819678)]] (60 connections)
- 🔶 [[DirectDebitService (Interface 1699813)]] (55 connections)
- 📄 [[Optional (Action 1789801)]] (53 connections)
- 📋 [[Integer _= 0]] (50 connections)
- *...and 14090 more*

### 📁 Architecture Model (62 elements)

- 📦 [[Contract Management (Component 1847626)]] (16 connections)
- 📦 [[Application origination]] (10 connections)
- 📦 [[SNM (Component 1847639)]] (5 connections)
- 📦 [[Product catalog (PRC)]] (4 connections)
- 📦 [[Debt Catalog]] (3 connections)
- 📦 [[LAP (Component 1847542)]] (2 connections)
- 📦 [[CBSA (Component 1847539)]] (1 connections)
- 📦 [[CIF (Component 1847541)]] (1 connections)
- 📦 [[Cabinet (Component 1847549)]] (1 connections)
- 📦 [[Payments (Component 1847622)]] (1 connections)
- *...and 52 more*

### 📁 Data manipulation support (36 elements)

- 🎯 [[Change contract status]] (14 connections)
- 🎯 [[{ADD}Move installment schedule to a specific version]] (10 connections)
- 📋 [[OBS message mapping rules]] (7 connections)
- 📋 [[Creation INSTALMENT120 record rules]] (4 connections)
- 🎯 [[Set Canceled contract to Signed status]] (3 connections)
- 🎯 [[Set Canceled contract to Signed when it was Approved only]] (3 connections)
- 🎯 [[Set Paid-off contract to Active status]] (3 connections)
- 🎯 [[Set Canceled contract to Active status]] (3 connections)
- 🎯 [[Set Written-off contract to Finished status]] (2 connections)
- 🎯 [[Change installment due date of Contract]] (1 connections)
- *...and 26 more*

### 📁 Feature Guide (37 elements)

- 📁 [[System configuration]] (0 connections)
- 📁 [[System integration]] (0 connections)
- 📁 [[Contract (Package 1216782)]] (0 connections)
- 🔲 [[BusinessEntity]] (0 connections)
- 📁 [[SOAP interface for application]] (0 connections)
- 📁 [[Application]] (0 connections)
- 📁 [[Initial client search]] (0 connections)
- 📁 [[Saving client data to CIF]] (0 connections)
- 📁 [[Fill in application form]] (0 connections)
- 📁 [[Offer]] (0 connections)
- *...and 27 more*

### 📁 Model (16 elements)

- 🔷 [[Privilege Map (Class 1137894)]] (3 connections)
- 🔷 [[Application Role (Class 1137893)]] (1 connections)
- 🔷 [[Privilege]] (1 connections)
- 📝 [[Privilege Scope (Enumeration 1137897)]] (1 connections)
- 🖥️ [[Application Role (GUIElement 1137899)]] (1 connections)
- 🖥️ [[Remove selected]] (1 connections)
- 🔷 [[Available Privileges]] (1 connections)
- 🖥️ [[Search for]] (1 connections)
- 🖥️ [[Add selected]] (1 connections)
- 🖥️ [[Save (GUIElement 1137913)]] (1 connections)
- *...and 6 more*

### 📁 Modules (8947 elements)

- 👤 [[External Component]] (144 connections)
- 👤 [[User (Actor 1872158)]] (122 connections)
- 🔷 [[Debt Catalogue]] (95 connections)
- 🔶 [[Contracts (Interface 1868512)]] (80 connections)
- 🔷 [[MoneyType (Class 1878205)]] (80 connections)
- 🔶 [[Contract (Interface 1839994)]] (74 connections)
- 🔶 [[{DEL}CommodityWS]] (64 connections)
- 🔶 [[ApplicationManagementWS_v23]] (57 connections)
- 📄 [[INCPAY Module (Sequence 1861956)]] (55 connections)
- 🔶 [[FinancingSchemeWS]] (49 connections)
- *...and 8937 more*

### 📁 Requirements Model (3663 elements)

- 👤 [[User (Actor 1880892)]] (367 connections)
- 👤 [[External system (Actor 1880866)]] (165 connections)
- 📄 [[BSL_LoanService (Sequence 1780835)]] (100 connections)
- 🔷 [[Salesroom (Class 1556394)]] (71 connections)
- 🔷 [[{MOD}Contract (Class 1879596)]] (71 connections)
- 🔷 [[Product catalog API (Class 1873281)]] (67 connections)
- 👤 [[Time (Actor 1880869)]] (61 connections)
- 📄 [[Loan Offer processing (SIR)]] (58 connections)
- 👤 [[CaBus-AM]] (58 connections)
- 🔶 [[ApplicationManagementWS_v21 (Interface 1820000)]] (53 connections)
- *...and 3653 more*

### 📁 _Uncategorized (8863 elements)

- 🔲 [[{DEL}Address]] (16 connections)
- 🔲 [[LOR-1662 Redirect LOR commodity functionality to Contract2Commodity]] (16 connections)
- 🔲 [[PersonName]] (13 connections)
- 🔲 [[LOR-658 PaperLess - provide contract history and contract detail before signature]] (12 connections)
- 🔲 [[REQ#1 Send data for Bank, Bank Branch, Commodity Category, Commodity type from BSL to HSIS]] (11 connections)
- 🔲 [[REQ#1 Message SELLERPLACE130 (Boundary 1610899)]] (11 connections)
- 🔲 [[CustomerEmployment]] (9 connections)
- 🔲 [[Ticketing (Boundary 1836464)]] (9 connections)
- 🔲 [[{DEL}CustomerAdditionalData]] (8 connections)
- 🔲 [[LOR-978 - Collect data for x-sell online recalculation]] (8 connections)
- *...and 8853 more*

