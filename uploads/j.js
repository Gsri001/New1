{
	"info": {
		"_postman_id": "5b791799-24c8-46ec-ae67-ecc7fb6b2bfd",
		"name": "Jira",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "log in with right username and right password",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "c974f0d3-9c09-48e8-853e-03045cedc1b0",
						"exec": [
							"pm.test(\"Status code is  200\",function(){",
							"    pm.response.to.have.status(200);",
							"});",
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "User-Agent",
						"value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:73.0) Gecko/20100101 Firefox/73.0"
					},
					{
						"key": "Accept",
						"value": "*/*"
					},
					{
						"key": "Accept-Language",
						"value": "en-US,en;q=0.5"
					},
					{
						"key": "Referer",
						"value": "https://id.atlassian.com/"
					},
					{
						"key": "Content-Type",
						"value": "application/json"
					},
					{
						"key": "Auth0-Client",
						"value": "eyJuYW1lIjoiYXV0aDAuanMiLCJ2ZXJzaW9uIjoiOS43LjIifQ=="
					},
					{
						"key": "Origin",
						"value": "https://id.atlassian.com"
					},
					{
						"key": "Connection",
						"value": "keep-alive"
					},
					{
						"key": "Cookie",
						"value": "ajs_group_id=null; ajs_anonymous_id=%22191175dc-a733-4f4d-af48-ed000199d6ca%22; ajs_user_id=%225e3af92c1b1d910e5dfdb670%22; atlCohort={bucketAll:{bucketedAtUTC:2020-02-05T17:27:37.400Z,version:2,index:96,bucketId:0}}; did=s%3Av0%3Ad7fdbef0-483c-11ea-8971-7db382d5130b.llvBtWKAOWUEg%2Bj2kKzllzIyAzH4RmVlU7FHNrLWPAQ; did_compat=s%3Av0%3Ad7fdbef0-483c-11ea-8971-7db382d5130b.llvBtWKAOWUEg%2Bj2kKzllzIyAzH4RmVlU7FHNrLWPAQ; __aid_user_id=5e3af92c1b1d910e5dfdb670; OptanonConsent=landingPath=NotLandingPage&datestamp=Fri+Feb+28+2020+23%3A16%3A14+GMT%2B0100+(Central+European+Standard+Time)&version=4.3.3&EU=true&groups=0_144275%3A1%2C101%3A1%2C1%3A1%2C2%3A1%2C103%3A1%2C0_144389%3A1%2C105%3A1%2C3%3A1%2C0_145087%3A1%2C112%3A1%2C0_145849%3A1%2C4%3A1%2C113%3A1%2C0_146519%3A1%2C125%3A1%2C0_147366%3A1%2C126%3A1%2C0_149658%3A1%2C127%3A1%2C0_150360%3A1%2C128%3A1%2C0_150361%3A1%2C131%3A1%2C0_152586%3A1%2C134%3A1%2C0_177825%3A1%2C0_144574%3A1%2C0_145089%3A1%2C0_147243%3A1%2C0_147316%3A1%2C0_147317%3A1%2C0_147320%3A1%2C0_147327%3A1%2C0_150364%3A1%2C0_150452%3A1%2C0_151725%3A1%2C0_151744%3A1%2C0_151754%3A1%2C0_155093%3A1%2C0_152355%3A1%2C0_147367%3A1%2C0_162785%3A1%2C0_148475%3A1%2C0_154648%3A1%2C0_147315%3A1%2C0_154645%3A1%2C0_155091%3A1%2C0_142671%3A1%2C0_154646%3A1%2C0_155092%3A1%2C0_150368%3A1; optimizelyEndUserId=oeu1582928168327r0.0031812836513410714; OptanonAlertBoxClosed=2020-02-28T22:16:14.503Z; _sio=191175dc-a733-4f4d-af48-ed000199d6ca; _gcl_au=1.1.1238241613.1582928175; seg_xid=c4bc8210-7efc-45a0-b187-c844e8ecc4a3; _biz_uid=83553d5e55a049619009303e6c2cba7a; _biz_nA=1; _biz_pendingA=%5B%5D; ei_client_id=5e599130d43c58001057e2ef; _biz_flagsA=%7B%22Version%22%3A1%2C%22XDomain%22%3A%221%22%7D; _ga=GA1.2.521151136.1582928178; _mkto_trk=id:594-ATC-127&token:_mch-atlassian.com-1582928178126-81442; _fbp=fb.1.1582928178539.1808496709; ctm={'pgv':6443068458204814|'vst':3024678334065520|'vstr':3900178405117656|'intr':1582928181119|'v':1}; __CT_Data=gpv=1&ckp=tld&dm=atlassian.com&apv_45_www33=1&cpv_45_www33=1; __cid=b2a9c298-d299-4812-888a-db8954b46ee4-5d14d95d57268983a654ad15"
					},
					{
						"key": "TE",
						"value": "Trailers"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\t\"client_id\":\"{{client_id}}\",\n\t\"username\":\"{{jiraEmail}}\",\n\t\"password\":\"{{jiraPassowrd}}\",\n\t\"realm\":\"eyJhcHBsaWNhdGlvbktleSI6ImppcmEifQ==\",\n\t\"credential_type\":\"http://auth0.com/oauth/grant-type/password-realm\"\n\t}"
				},
				"url": {
					"raw": "https://auth.atlassian.com/co/authenticate",
					"protocol": "https",
					"host": [
						"auth",
						"atlassian",
						"com"
					],
					"path": [
						"co",
						"authenticate"
					]
				}
			},
			"response": []
		},
		{
			"name": "log in with right username and wrong password",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "45c6b8a3-4dce-4bc8-9ed6-b042f9cec83c",
						"exec": [
							"pm.test(\"Status code is 403\",function(){",
							"    pm.response.to.have.status(403);",
							"});",
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "User-Agent",
						"value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:73.0) Gecko/20100101 Firefox/73.0"
					},
					{
						"key": "Accept",
						"value": "*/*"
					},
					{
						"key": "Accept-Language",
						"value": "en-US,en;q=0.5"
					},
					{
						"key": "Referer",
						"value": "https://id.atlassian.com/"
					},
					{
						"key": "Content-Type",
						"value": "application/json"
					},
					{
						"key": "Auth0-Client",
						"value": "eyJuYW1lIjoiYXV0aDAuanMiLCJ2ZXJzaW9uIjoiOS43LjIifQ=="
					},
					{
						"key": "Origin",
						"value": "https://id.atlassian.com"
					},
					{
						"key": "Connection",
						"value": "keep-alive"
					},
					{
						"key": "Cookie",
						"value": "ajs_group_id=null; ajs_anonymous_id=%22191175dc-a733-4f4d-af48-ed000199d6ca%22; ajs_user_id=%225e3af92c1b1d910e5dfdb670%22; atlCohort={bucketAll:{bucketedAtUTC:2020-02-05T17:27:37.400Z,version:2,index:96,bucketId:0}}; did=s%3Av0%3Ad7fdbef0-483c-11ea-8971-7db382d5130b.llvBtWKAOWUEg%2Bj2kKzllzIyAzH4RmVlU7FHNrLWPAQ; did_compat=s%3Av0%3Ad7fdbef0-483c-11ea-8971-7db382d5130b.llvBtWKAOWUEg%2Bj2kKzllzIyAzH4RmVlU7FHNrLWPAQ; __aid_user_id=5e3af92c1b1d910e5dfdb670; OptanonConsent=landingPath=NotLandingPage&datestamp=Fri+Feb+28+2020+23%3A16%3A14+GMT%2B0100+(Central+European+Standard+Time)&version=4.3.3&EU=true&groups=0_144275%3A1%2C101%3A1%2C1%3A1%2C2%3A1%2C103%3A1%2C0_144389%3A1%2C105%3A1%2C3%3A1%2C0_145087%3A1%2C112%3A1%2C0_145849%3A1%2C4%3A1%2C113%3A1%2C0_146519%3A1%2C125%3A1%2C0_147366%3A1%2C126%3A1%2C0_149658%3A1%2C127%3A1%2C0_150360%3A1%2C128%3A1%2C0_150361%3A1%2C131%3A1%2C0_152586%3A1%2C134%3A1%2C0_177825%3A1%2C0_144574%3A1%2C0_145089%3A1%2C0_147243%3A1%2C0_147316%3A1%2C0_147317%3A1%2C0_147320%3A1%2C0_147327%3A1%2C0_150364%3A1%2C0_150452%3A1%2C0_151725%3A1%2C0_151744%3A1%2C0_151754%3A1%2C0_155093%3A1%2C0_152355%3A1%2C0_147367%3A1%2C0_162785%3A1%2C0_148475%3A1%2C0_154648%3A1%2C0_147315%3A1%2C0_154645%3A1%2C0_155091%3A1%2C0_142671%3A1%2C0_154646%3A1%2C0_155092%3A1%2C0_150368%3A1; optimizelyEndUserId=oeu1582928168327r0.0031812836513410714; OptanonAlertBoxClosed=2020-02-28T22:16:14.503Z; _sio=191175dc-a733-4f4d-af48-ed000199d6ca; _gcl_au=1.1.1238241613.1582928175; seg_xid=c4bc8210-7efc-45a0-b187-c844e8ecc4a3; _biz_uid=83553d5e55a049619009303e6c2cba7a; _biz_nA=1; _biz_pendingA=%5B%5D; ei_client_id=5e599130d43c58001057e2ef; _biz_flagsA=%7B%22Version%22%3A1%2C%22XDomain%22%3A%221%22%7D; _ga=GA1.2.521151136.1582928178; _mkto_trk=id:594-ATC-127&token:_mch-atlassian.com-1582928178126-81442; _fbp=fb.1.1582928178539.1808496709; ctm={'pgv':6443068458204814|'vst':3024678334065520|'vstr':3900178405117656|'intr':1582928181119|'v':1}; __CT_Data=gpv=1&ckp=tld&dm=atlassian.com&apv_45_www33=1&cpv_45_www33=1; __cid=b2a9c298-d299-4812-888a-db8954b46ee4-5d14d95d57268983a654ad15"
					},
					{
						"key": "TE",
						"value": "Trailers"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\t\"client_id\":\"{{client_id}}\",\n\t\"username\":\"{{jiraEmail}}\",\n\t\"password\":\"wrongPassword\",\n\t\"realm\":\"eyJhcHBsaWNhdGlvbktleSI6ImppcmEifQ==\",\n\t\"credential_type\":\"http://auth0.com/oauth/grant-type/password-realm\"\n\t}"
				},
				"url": {
					"raw": "https://auth.atlassian.com/co/authenticate",
					"protocol": "https",
					"host": [
						"auth",
						"atlassian",
						"com"
					],
					"path": [
						"co",
						"authenticate"
					]
				}
			},
			"response": []
		},
		{
			"name": "log in with wrong username and right password",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "90c966a7-9fc6-4cf9-9918-05066725d5e9",
						"exec": [
							"pm.test(\"Status code is 429\",function(){",
							"    pm.response.to.have.status(429);",
							"});",
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "User-Agent",
						"value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:73.0) Gecko/20100101 Firefox/73.0"
					},
					{
						"key": "Accept",
						"value": "*/*"
					},
					{
						"key": "Accept-Language",
						"value": "en-US,en;q=0.5"
					},
					{
						"key": "Referer",
						"value": "https://id.atlassian.com/"
					},
					{
						"key": "Content-Type",
						"value": "application/json"
					},
					{
						"key": "Auth0-Client",
						"value": "eyJuYW1lIjoiYXV0aDAuanMiLCJ2ZXJzaW9uIjoiOS43LjIifQ=="
					},
					{
						"key": "Origin",
						"value": "https://id.atlassian.com"
					},
					{
						"key": "Connection",
						"value": "keep-alive"
					},
					{
						"key": "Cookie",
						"value": "ajs_group_id=null; ajs_anonymous_id=%22191175dc-a733-4f4d-af48-ed000199d6ca%22; ajs_user_id=%225e3af92c1b1d910e5dfdb670%22; atlCohort={bucketAll:{bucketedAtUTC:2020-02-05T17:27:37.400Z,version:2,index:96,bucketId:0}}; did=s%3Av0%3Ad7fdbef0-483c-11ea-8971-7db382d5130b.llvBtWKAOWUEg%2Bj2kKzllzIyAzH4RmVlU7FHNrLWPAQ; did_compat=s%3Av0%3Ad7fdbef0-483c-11ea-8971-7db382d5130b.llvBtWKAOWUEg%2Bj2kKzllzIyAzH4RmVlU7FHNrLWPAQ; __aid_user_id=5e3af92c1b1d910e5dfdb670; OptanonConsent=landingPath=NotLandingPage&datestamp=Fri+Feb+28+2020+23%3A16%3A14+GMT%2B0100+(Central+European+Standard+Time)&version=4.3.3&EU=true&groups=0_144275%3A1%2C101%3A1%2C1%3A1%2C2%3A1%2C103%3A1%2C0_144389%3A1%2C105%3A1%2C3%3A1%2C0_145087%3A1%2C112%3A1%2C0_145849%3A1%2C4%3A1%2C113%3A1%2C0_146519%3A1%2C125%3A1%2C0_147366%3A1%2C126%3A1%2C0_149658%3A1%2C127%3A1%2C0_150360%3A1%2C128%3A1%2C0_150361%3A1%2C131%3A1%2C0_152586%3A1%2C134%3A1%2C0_177825%3A1%2C0_144574%3A1%2C0_145089%3A1%2C0_147243%3A1%2C0_147316%3A1%2C0_147317%3A1%2C0_147320%3A1%2C0_147327%3A1%2C0_150364%3A1%2C0_150452%3A1%2C0_151725%3A1%2C0_151744%3A1%2C0_151754%3A1%2C0_155093%3A1%2C0_152355%3A1%2C0_147367%3A1%2C0_162785%3A1%2C0_148475%3A1%2C0_154648%3A1%2C0_147315%3A1%2C0_154645%3A1%2C0_155091%3A1%2C0_142671%3A1%2C0_154646%3A1%2C0_155092%3A1%2C0_150368%3A1; optimizelyEndUserId=oeu1582928168327r0.0031812836513410714; OptanonAlertBoxClosed=2020-02-28T22:16:14.503Z; _sio=191175dc-a733-4f4d-af48-ed000199d6ca; _gcl_au=1.1.1238241613.1582928175; seg_xid=c4bc8210-7efc-45a0-b187-c844e8ecc4a3; _biz_uid=83553d5e55a049619009303e6c2cba7a; _biz_nA=1; _biz_pendingA=%5B%5D; ei_client_id=5e599130d43c58001057e2ef; _biz_flagsA=%7B%22Version%22%3A1%2C%22XDomain%22%3A%221%22%7D; _ga=GA1.2.521151136.1582928178; _mkto_trk=id:594-ATC-127&token:_mch-atlassian.com-1582928178126-81442; _fbp=fb.1.1582928178539.1808496709; ctm={'pgv':6443068458204814|'vst':3024678334065520|'vstr':3900178405117656|'intr':1582928181119|'v':1}; __CT_Data=gpv=1&ckp=tld&dm=atlassian.com&apv_45_www33=1&cpv_45_www33=1; __cid=b2a9c298-d299-4812-888a-db8954b46ee4-5d14d95d57268983a654ad15"
					},
					{
						"key": "TE",
						"value": "Trailers"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\t\"client_id\":\"{{client_id}}\",\n\t\"username\":\"wrongUserName\",\n\t\"password\":\"{{jiraPassowrd}}\",\n\t\"realm\":\"eyJhcHBsaWNhdGlvbktleSI6ImppcmEifQ==\",\n\t\"credential_type\":\"http://auth0.com/oauth/grant-type/password-realm\"\n\t}"
				},
				"url": {
					"raw": "https://auth.atlassian.com/co/authenticate",
					"protocol": "https",
					"host": [
						"auth",
						"atlassian",
						"com"
					],
					"path": [
						"co",
						"authenticate"
					]
				}
			},
			"response": []
		},
		{
			"name": "log in with wrong username and wrong password",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "421f965d-5400-41f9-bfa3-1dbe4c4ba49d",
						"exec": [
							"pm.test(\"Status code is 429\",function(){",
							"    pm.response.to.have.status(429);",
							"});",
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "User-Agent",
						"value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:73.0) Gecko/20100101 Firefox/73.0"
					},
					{
						"key": "Accept",
						"value": "*/*"
					},
					{
						"key": "Accept-Language",
						"value": "en-US,en;q=0.5"
					},
					{
						"key": "Referer",
						"value": "https://id.atlassian.com/"
					},
					{
						"key": "Content-Type",
						"value": "application/json"
					},
					{
						"key": "Auth0-Client",
						"value": "eyJuYW1lIjoiYXV0aDAuanMiLCJ2ZXJzaW9uIjoiOS43LjIifQ=="
					},
					{
						"key": "Origin",
						"value": "https://id.atlassian.com"
					},
					{
						"key": "Connection",
						"value": "keep-alive"
					},
					{
						"key": "Cookie",
						"value": "ajs_group_id=null; ajs_anonymous_id=%22191175dc-a733-4f4d-af48-ed000199d6ca%22; ajs_user_id=%225e3af92c1b1d910e5dfdb670%22; atlCohort={bucketAll:{bucketedAtUTC:2020-02-05T17:27:37.400Z,version:2,index:96,bucketId:0}}; did=s%3Av0%3Ad7fdbef0-483c-11ea-8971-7db382d5130b.llvBtWKAOWUEg%2Bj2kKzllzIyAzH4RmVlU7FHNrLWPAQ; did_compat=s%3Av0%3Ad7fdbef0-483c-11ea-8971-7db382d5130b.llvBtWKAOWUEg%2Bj2kKzllzIyAzH4RmVlU7FHNrLWPAQ; __aid_user_id=5e3af92c1b1d910e5dfdb670; OptanonConsent=landingPath=NotLandingPage&datestamp=Fri+Feb+28+2020+23%3A16%3A14+GMT%2B0100+(Central+European+Standard+Time)&version=4.3.3&EU=true&groups=0_144275%3A1%2C101%3A1%2C1%3A1%2C2%3A1%2C103%3A1%2C0_144389%3A1%2C105%3A1%2C3%3A1%2C0_145087%3A1%2C112%3A1%2C0_145849%3A1%2C4%3A1%2C113%3A1%2C0_146519%3A1%2C125%3A1%2C0_147366%3A1%2C126%3A1%2C0_149658%3A1%2C127%3A1%2C0_150360%3A1%2C128%3A1%2C0_150361%3A1%2C131%3A1%2C0_152586%3A1%2C134%3A1%2C0_177825%3A1%2C0_144574%3A1%2C0_145089%3A1%2C0_147243%3A1%2C0_147316%3A1%2C0_147317%3A1%2C0_147320%3A1%2C0_147327%3A1%2C0_150364%3A1%2C0_150452%3A1%2C0_151725%3A1%2C0_151744%3A1%2C0_151754%3A1%2C0_155093%3A1%2C0_152355%3A1%2C0_147367%3A1%2C0_162785%3A1%2C0_148475%3A1%2C0_154648%3A1%2C0_147315%3A1%2C0_154645%3A1%2C0_155091%3A1%2C0_142671%3A1%2C0_154646%3A1%2C0_155092%3A1%2C0_150368%3A1; optimizelyEndUserId=oeu1582928168327r0.0031812836513410714; OptanonAlertBoxClosed=2020-02-28T22:16:14.503Z; _sio=191175dc-a733-4f4d-af48-ed000199d6ca; _gcl_au=1.1.1238241613.1582928175; seg_xid=c4bc8210-7efc-45a0-b187-c844e8ecc4a3; _biz_uid=83553d5e55a049619009303e6c2cba7a; _biz_nA=1; _biz_pendingA=%5B%5D; ei_client_id=5e599130d43c58001057e2ef; _biz_flagsA=%7B%22Version%22%3A1%2C%22XDomain%22%3A%221%22%7D; _ga=GA1.2.521151136.1582928178; _mkto_trk=id:594-ATC-127&token:_mch-atlassian.com-1582928178126-81442; _fbp=fb.1.1582928178539.1808496709; ctm={'pgv':6443068458204814|'vst':3024678334065520|'vstr':3900178405117656|'intr':1582928181119|'v':1}; __CT_Data=gpv=1&ckp=tld&dm=atlassian.com&apv_45_www33=1&cpv_45_www33=1; __cid=b2a9c298-d299-4812-888a-db8954b46ee4-5d14d95d57268983a654ad15"
					},
					{
						"key": "TE",
						"value": "Trailers"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\t\"client_id\":\"{{client_id}}\",\n\t\"username\":\"wrongUserName\",\n\t\"password\":\"wrongPassowrd\",\n\t\"realm\":\"eyJhcHBsaWNhdGlvbktleSI6ImppcmEifQ==\",\n\t\"credential_type\":\"http://auth0.com/oauth/grant-type/password-realm\"\n\t}"
				},
				"url": {
					"raw": "https://auth.atlassian.com/co/authenticate",
					"protocol": "https",
					"host": [
						"auth",
						"atlassian",
						"com"
					],
					"path": [
						"co",
						"authenticate"
					]
				}
			},
			"response": []
		},
		{
			"name": "log in without username and  password",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "7907a4ee-742a-4ad5-8606-0d8ae0e22586",
						"exec": [
							"pm.test(\"Status code is 400\",function(){",
							"    pm.response.to.have.status(400);",
							"});",
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "User-Agent",
						"value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:73.0) Gecko/20100101 Firefox/73.0"
					},
					{
						"key": "Accept",
						"value": "*/*"
					},
					{
						"key": "Accept-Language",
						"value": "en-US,en;q=0.5"
					},
					{
						"key": "Referer",
						"value": "https://id.atlassian.com/"
					},
					{
						"key": "Content-Type",
						"value": "application/json"
					},
					{
						"key": "Auth0-Client",
						"value": "eyJuYW1lIjoiYXV0aDAuanMiLCJ2ZXJzaW9uIjoiOS43LjIifQ=="
					},
					{
						"key": "Origin",
						"value": "https://id.atlassian.com"
					},
					{
						"key": "Connection",
						"value": "keep-alive"
					},
					{
						"key": "Cookie",
						"value": "ajs_group_id=null; ajs_anonymous_id=%22191175dc-a733-4f4d-af48-ed000199d6ca%22; ajs_user_id=%225e3af92c1b1d910e5dfdb670%22; atlCohort={bucketAll:{bucketedAtUTC:2020-02-05T17:27:37.400Z,version:2,index:96,bucketId:0}}; did=s%3Av0%3Ad7fdbef0-483c-11ea-8971-7db382d5130b.llvBtWKAOWUEg%2Bj2kKzllzIyAzH4RmVlU7FHNrLWPAQ; did_compat=s%3Av0%3Ad7fdbef0-483c-11ea-8971-7db382d5130b.llvBtWKAOWUEg%2Bj2kKzllzIyAzH4RmVlU7FHNrLWPAQ; __aid_user_id=5e3af92c1b1d910e5dfdb670; OptanonConsent=landingPath=NotLandingPage&datestamp=Fri+Feb+28+2020+23%3A16%3A14+GMT%2B0100+(Central+European+Standard+Time)&version=4.3.3&EU=true&groups=0_144275%3A1%2C101%3A1%2C1%3A1%2C2%3A1%2C103%3A1%2C0_144389%3A1%2C105%3A1%2C3%3A1%2C0_145087%3A1%2C112%3A1%2C0_145849%3A1%2C4%3A1%2C113%3A1%2C0_146519%3A1%2C125%3A1%2C0_147366%3A1%2C126%3A1%2C0_149658%3A1%2C127%3A1%2C0_150360%3A1%2C128%3A1%2C0_150361%3A1%2C131%3A1%2C0_152586%3A1%2C134%3A1%2C0_177825%3A1%2C0_144574%3A1%2C0_145089%3A1%2C0_147243%3A1%2C0_147316%3A1%2C0_147317%3A1%2C0_147320%3A1%2C0_147327%3A1%2C0_150364%3A1%2C0_150452%3A1%2C0_151725%3A1%2C0_151744%3A1%2C0_151754%3A1%2C0_155093%3A1%2C0_152355%3A1%2C0_147367%3A1%2C0_162785%3A1%2C0_148475%3A1%2C0_154648%3A1%2C0_147315%3A1%2C0_154645%3A1%2C0_155091%3A1%2C0_142671%3A1%2C0_154646%3A1%2C0_155092%3A1%2C0_150368%3A1; optimizelyEndUserId=oeu1582928168327r0.0031812836513410714; OptanonAlertBoxClosed=2020-02-28T22:16:14.503Z; _sio=191175dc-a733-4f4d-af48-ed000199d6ca; _gcl_au=1.1.1238241613.1582928175; seg_xid=c4bc8210-7efc-45a0-b187-c844e8ecc4a3; _biz_uid=83553d5e55a049619009303e6c2cba7a; _biz_nA=1; _biz_pendingA=%5B%5D; ei_client_id=5e599130d43c58001057e2ef; _biz_flagsA=%7B%22Version%22%3A1%2C%22XDomain%22%3A%221%22%7D; _ga=GA1.2.521151136.1582928178; _mkto_trk=id:594-ATC-127&token:_mch-atlassian.com-1582928178126-81442; _fbp=fb.1.1582928178539.1808496709; ctm={'pgv':6443068458204814|'vst':3024678334065520|'vstr':3900178405117656|'intr':1582928181119|'v':1}; __CT_Data=gpv=1&ckp=tld&dm=atlassian.com&apv_45_www33=1&cpv_45_www33=1; __cid=b2a9c298-d299-4812-888a-db8954b46ee4-5d14d95d57268983a654ad15"
					},
					{
						"key": "TE",
						"value": "Trailers"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\t\"client_id\":\"{{client_id}}\",\n\t\"username\":\"\",\n\t\"password\":\"\",\n\t\"realm\":\"eyJhcHBsaWNhdGlvbktleSI6ImppcmEifQ==\",\n\t\"credential_type\":\"http://auth0.com/oauth/grant-type/password-realm\"\n\t}"
				},
				"url": {
					"raw": "https://auth.atlassian.com/co/authenticate",
					"protocol": "https",
					"host": [
						"auth",
						"atlassian",
						"com"
					],
					"path": [
						"co",
						"authenticate"
					]
				}
			},
			"response": []
		},
		{
			"name": "log in with no username and wrong password",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "70755326-c81c-472a-8555-0449ab082b70",
						"exec": [
							"pm.test(\"Status code is 400\",function(){",
							"    pm.response.to.have.status(400);",
							"});",
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "User-Agent",
						"value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:73.0) Gecko/20100101 Firefox/73.0"
					},
					{
						"key": "Accept",
						"value": "*/*"
					},
					{
						"key": "Accept-Language",
						"value": "en-US,en;q=0.5"
					},
					{
						"key": "Referer",
						"value": "https://id.atlassian.com/"
					},
					{
						"key": "Content-Type",
						"value": "application/json"
					},
					{
						"key": "Auth0-Client",
						"value": "eyJuYW1lIjoiYXV0aDAuanMiLCJ2ZXJzaW9uIjoiOS43LjIifQ=="
					},
					{
						"key": "Origin",
						"value": "https://id.atlassian.com"
					},
					{
						"key": "Connection",
						"value": "keep-alive"
					},
					{
						"key": "Cookie",
						"value": "ajs_group_id=null; ajs_anonymous_id=%22191175dc-a733-4f4d-af48-ed000199d6ca%22; ajs_user_id=%225e3af92c1b1d910e5dfdb670%22; atlCohort={bucketAll:{bucketedAtUTC:2020-02-05T17:27:37.400Z,version:2,index:96,bucketId:0}}; did=s%3Av0%3Ad7fdbef0-483c-11ea-8971-7db382d5130b.llvBtWKAOWUEg%2Bj2kKzllzIyAzH4RmVlU7FHNrLWPAQ; did_compat=s%3Av0%3Ad7fdbef0-483c-11ea-8971-7db382d5130b.llvBtWKAOWUEg%2Bj2kKzllzIyAzH4RmVlU7FHNrLWPAQ; __aid_user_id=5e3af92c1b1d910e5dfdb670; OptanonConsent=landingPath=NotLandingPage&datestamp=Fri+Feb+28+2020+23%3A16%3A14+GMT%2B0100+(Central+European+Standard+Time)&version=4.3.3&EU=true&groups=0_144275%3A1%2C101%3A1%2C1%3A1%2C2%3A1%2C103%3A1%2C0_144389%3A1%2C105%3A1%2C3%3A1%2C0_145087%3A1%2C112%3A1%2C0_145849%3A1%2C4%3A1%2C113%3A1%2C0_146519%3A1%2C125%3A1%2C0_147366%3A1%2C126%3A1%2C0_149658%3A1%2C127%3A1%2C0_150360%3A1%2C128%3A1%2C0_150361%3A1%2C131%3A1%2C0_152586%3A1%2C134%3A1%2C0_177825%3A1%2C0_144574%3A1%2C0_145089%3A1%2C0_147243%3A1%2C0_147316%3A1%2C0_147317%3A1%2C0_147320%3A1%2C0_147327%3A1%2C0_150364%3A1%2C0_150452%3A1%2C0_151725%3A1%2C0_151744%3A1%2C0_151754%3A1%2C0_155093%3A1%2C0_152355%3A1%2C0_147367%3A1%2C0_162785%3A1%2C0_148475%3A1%2C0_154648%3A1%2C0_147315%3A1%2C0_154645%3A1%2C0_155091%3A1%2C0_142671%3A1%2C0_154646%3A1%2C0_155092%3A1%2C0_150368%3A1; optimizelyEndUserId=oeu1582928168327r0.0031812836513410714; OptanonAlertBoxClosed=2020-02-28T22:16:14.503Z; _sio=191175dc-a733-4f4d-af48-ed000199d6ca; _gcl_au=1.1.1238241613.1582928175; seg_xid=c4bc8210-7efc-45a0-b187-c844e8ecc4a3; _biz_uid=83553d5e55a049619009303e6c2cba7a; _biz_nA=1; _biz_pendingA=%5B%5D; ei_client_id=5e599130d43c58001057e2ef; _biz_flagsA=%7B%22Version%22%3A1%2C%22XDomain%22%3A%221%22%7D; _ga=GA1.2.521151136.1582928178; _mkto_trk=id:594-ATC-127&token:_mch-atlassian.com-1582928178126-81442; _fbp=fb.1.1582928178539.1808496709; ctm={'pgv':6443068458204814|'vst':3024678334065520|'vstr':3900178405117656|'intr':1582928181119|'v':1}; __CT_Data=gpv=1&ckp=tld&dm=atlassian.com&apv_45_www33=1&cpv_45_www33=1; __cid=b2a9c298-d299-4812-888a-db8954b46ee4-5d14d95d57268983a654ad15"
					},
					{
						"key": "TE",
						"value": "Trailers"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\t\"client_id\":\"{{client_id}}\",\n\t\"username\":\"\",\n\t\"password\":\"wrongPassword\",\n\t\"realm\":\"eyJhcHBsaWNhdGlvbktleSI6ImppcmEifQ==\",\n\t\"credential_type\":\"http://auth0.com/oauth/grant-type/password-realm\"\n\t}"
				},
				"url": {
					"raw": "https://auth.atlassian.com/co/authenticate",
					"protocol": "https",
					"host": [
						"auth",
						"atlassian",
						"com"
					],
					"path": [
						"co",
						"authenticate"
					]
				}
			},
			"response": []
		},
		{
			"name": "log in with right username and no password",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "33f3e839-4ca7-4873-ab52-00d1bec4c7bd",
						"exec": [
							"pm.test(\"Status code is 400\",function(){",
							"    pm.response.to.have.status(400);",
							"});",
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "User-Agent",
						"value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:73.0) Gecko/20100101 Firefox/73.0"
					},
					{
						"key": "Accept",
						"value": "*/*"
					},
					{
						"key": "Accept-Language",
						"value": "en-US,en;q=0.5"
					},
					{
						"key": "Referer",
						"value": "https://id.atlassian.com/"
					},
					{
						"key": "Content-Type",
						"value": "application/json"
					},
					{
						"key": "Auth0-Client",
						"value": "eyJuYW1lIjoiYXV0aDAuanMiLCJ2ZXJzaW9uIjoiOS43LjIifQ=="
					},
					{
						"key": "Origin",
						"value": "https://id.atlassian.com"
					},
					{
						"key": "Connection",
						"value": "keep-alive"
					},
					{
						"key": "Cookie",
						"value": "ajs_group_id=null; ajs_anonymous_id=%22191175dc-a733-4f4d-af48-ed000199d6ca%22; ajs_user_id=%225e3af92c1b1d910e5dfdb670%22; atlCohort={bucketAll:{bucketedAtUTC:2020-02-05T17:27:37.400Z,version:2,index:96,bucketId:0}}; did=s%3Av0%3Ad7fdbef0-483c-11ea-8971-7db382d5130b.llvBtWKAOWUEg%2Bj2kKzllzIyAzH4RmVlU7FHNrLWPAQ; did_compat=s%3Av0%3Ad7fdbef0-483c-11ea-8971-7db382d5130b.llvBtWKAOWUEg%2Bj2kKzllzIyAzH4RmVlU7FHNrLWPAQ; __aid_user_id=5e3af92c1b1d910e5dfdb670; OptanonConsent=landingPath=NotLandingPage&datestamp=Fri+Feb+28+2020+23%3A16%3A14+GMT%2B0100+(Central+European+Standard+Time)&version=4.3.3&EU=true&groups=0_144275%3A1%2C101%3A1%2C1%3A1%2C2%3A1%2C103%3A1%2C0_144389%3A1%2C105%3A1%2C3%3A1%2C0_145087%3A1%2C112%3A1%2C0_145849%3A1%2C4%3A1%2C113%3A1%2C0_146519%3A1%2C125%3A1%2C0_147366%3A1%2C126%3A1%2C0_149658%3A1%2C127%3A1%2C0_150360%3A1%2C128%3A1%2C0_150361%3A1%2C131%3A1%2C0_152586%3A1%2C134%3A1%2C0_177825%3A1%2C0_144574%3A1%2C0_145089%3A1%2C0_147243%3A1%2C0_147316%3A1%2C0_147317%3A1%2C0_147320%3A1%2C0_147327%3A1%2C0_150364%3A1%2C0_150452%3A1%2C0_151725%3A1%2C0_151744%3A1%2C0_151754%3A1%2C0_155093%3A1%2C0_152355%3A1%2C0_147367%3A1%2C0_162785%3A1%2C0_148475%3A1%2C0_154648%3A1%2C0_147315%3A1%2C0_154645%3A1%2C0_155091%3A1%2C0_142671%3A1%2C0_154646%3A1%2C0_155092%3A1%2C0_150368%3A1; optimizelyEndUserId=oeu1582928168327r0.0031812836513410714; OptanonAlertBoxClosed=2020-02-28T22:16:14.503Z; _sio=191175dc-a733-4f4d-af48-ed000199d6ca; _gcl_au=1.1.1238241613.1582928175; seg_xid=c4bc8210-7efc-45a0-b187-c844e8ecc4a3; _biz_uid=83553d5e55a049619009303e6c2cba7a; _biz_nA=1; _biz_pendingA=%5B%5D; ei_client_id=5e599130d43c58001057e2ef; _biz_flagsA=%7B%22Version%22%3A1%2C%22XDomain%22%3A%221%22%7D; _ga=GA1.2.521151136.1582928178; _mkto_trk=id:594-ATC-127&token:_mch-atlassian.com-1582928178126-81442; _fbp=fb.1.1582928178539.1808496709; ctm={'pgv':6443068458204814|'vst':3024678334065520|'vstr':3900178405117656|'intr':1582928181119|'v':1}; __CT_Data=gpv=1&ckp=tld&dm=atlassian.com&apv_45_www33=1&cpv_45_www33=1; __cid=b2a9c298-d299-4812-888a-db8954b46ee4-5d14d95d57268983a654ad15"
					},
					{
						"key": "TE",
						"value": "Trailers"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\t\"client_id\":\"{{client_id}}\",\n\t\"username\":\"{{jiraEmail}}\",\n\t\"password\":\"\",\n\t\"realm\":\"eyJhcHBsaWNhdGlvbktleSI6ImppcmEifQ==\",\n\t\"credential_type\":\"http://auth0.com/oauth/grant-type/password-realm\"\n\t}"
				},
				"url": {
					"raw": "https://auth.atlassian.com/co/authenticate",
					"protocol": "https",
					"host": [
						"auth",
						"atlassian",
						"com"
					],
					"path": [
						"co",
						"authenticate"
					]
				}
			},
			"response": []
		},
		{
			"name": "log in with no username and right password",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "ac435203-ae2d-48fc-ac2a-48d57437f0c2",
						"exec": [
							"pm.test(\"Status code is 400\",function(){",
							"    pm.response.to.have.status(400);",
							"});",
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "User-Agent",
						"value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:73.0) Gecko/20100101 Firefox/73.0"
					},
					{
						"key": "Accept",
						"value": "*/*"
					},
					{
						"key": "Accept-Language",
						"value": "en-US,en;q=0.5"
					},
					{
						"key": "Referer",
						"value": "https://id.atlassian.com/"
					},
					{
						"key": "Content-Type",
						"value": "application/json"
					},
					{
						"key": "Auth0-Client",
						"value": "eyJuYW1lIjoiYXV0aDAuanMiLCJ2ZXJzaW9uIjoiOS43LjIifQ=="
					},
					{
						"key": "Origin",
						"value": "https://id.atlassian.com"
					},
					{
						"key": "Connection",
						"value": "keep-alive"
					},
					{
						"key": "Cookie",
						"value": "ajs_group_id=null; ajs_anonymous_id=%22191175dc-a733-4f4d-af48-ed000199d6ca%22; ajs_user_id=%225e3af92c1b1d910e5dfdb670%22; atlCohort={bucketAll:{bucketedAtUTC:2020-02-05T17:27:37.400Z,version:2,index:96,bucketId:0}}; did=s%3Av0%3Ad7fdbef0-483c-11ea-8971-7db382d5130b.llvBtWKAOWUEg%2Bj2kKzllzIyAzH4RmVlU7FHNrLWPAQ; did_compat=s%3Av0%3Ad7fdbef0-483c-11ea-8971-7db382d5130b.llvBtWKAOWUEg%2Bj2kKzllzIyAzH4RmVlU7FHNrLWPAQ; __aid_user_id=5e3af92c1b1d910e5dfdb670; OptanonConsent=landingPath=NotLandingPage&datestamp=Fri+Feb+28+2020+23%3A16%3A14+GMT%2B0100+(Central+European+Standard+Time)&version=4.3.3&EU=true&groups=0_144275%3A1%2C101%3A1%2C1%3A1%2C2%3A1%2C103%3A1%2C0_144389%3A1%2C105%3A1%2C3%3A1%2C0_145087%3A1%2C112%3A1%2C0_145849%3A1%2C4%3A1%2C113%3A1%2C0_146519%3A1%2C125%3A1%2C0_147366%3A1%2C126%3A1%2C0_149658%3A1%2C127%3A1%2C0_150360%3A1%2C128%3A1%2C0_150361%3A1%2C131%3A1%2C0_152586%3A1%2C134%3A1%2C0_177825%3A1%2C0_144574%3A1%2C0_145089%3A1%2C0_147243%3A1%2C0_147316%3A1%2C0_147317%3A1%2C0_147320%3A1%2C0_147327%3A1%2C0_150364%3A1%2C0_150452%3A1%2C0_151725%3A1%2C0_151744%3A1%2C0_151754%3A1%2C0_155093%3A1%2C0_152355%3A1%2C0_147367%3A1%2C0_162785%3A1%2C0_148475%3A1%2C0_154648%3A1%2C0_147315%3A1%2C0_154645%3A1%2C0_155091%3A1%2C0_142671%3A1%2C0_154646%3A1%2C0_155092%3A1%2C0_150368%3A1; optimizelyEndUserId=oeu1582928168327r0.0031812836513410714; OptanonAlertBoxClosed=2020-02-28T22:16:14.503Z; _sio=191175dc-a733-4f4d-af48-ed000199d6ca; _gcl_au=1.1.1238241613.1582928175; seg_xid=c4bc8210-7efc-45a0-b187-c844e8ecc4a3; _biz_uid=83553d5e55a049619009303e6c2cba7a; _biz_nA=1; _biz_pendingA=%5B%5D; ei_client_id=5e599130d43c58001057e2ef; _biz_flagsA=%7B%22Version%22%3A1%2C%22XDomain%22%3A%221%22%7D; _ga=GA1.2.521151136.1582928178; _mkto_trk=id:594-ATC-127&token:_mch-atlassian.com-1582928178126-81442; _fbp=fb.1.1582928178539.1808496709; ctm={'pgv':6443068458204814|'vst':3024678334065520|'vstr':3900178405117656|'intr':1582928181119|'v':1}; __CT_Data=gpv=1&ckp=tld&dm=atlassian.com&apv_45_www33=1&cpv_45_www33=1; __cid=b2a9c298-d299-4812-888a-db8954b46ee4-5d14d95d57268983a654ad15"
					},
					{
						"key": "TE",
						"value": "Trailers"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\t\"client_id\":\"{{client_id}}\",\n\t\"username\":\"\",\n\t\"password\":\"{{jiraPassowrd}}\",\n\t\"realm\":\"eyJhcHBsaWNhdGlvbktleSI6ImppcmEifQ==\",\n\t\"credential_type\":\"http://auth0.com/oauth/grant-type/password-realm\"\n\t}"
				},
				"url": {
					"raw": "https://auth.atlassian.com/co/authenticate",
					"protocol": "https",
					"host": [
						"auth",
						"atlassian",
						"com"
					],
					"path": [
						"co",
						"authenticate"
					]
				}
			},
			"response": []
		},
		{
			"name": "log in with wrong username and no password",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "c8e8d03d-ddfe-432a-8793-86cd22d3d7d0",
						"exec": [
							"pm.test(\"Status code is 429\",function(){",
							"    pm.response.to.have.status(429);",
							"});",
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "User-Agent",
						"value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:73.0) Gecko/20100101 Firefox/73.0"
					},
					{
						"key": "Accept",
						"value": "*/*"
					},
					{
						"key": "Accept-Language",
						"value": "en-US,en;q=0.5"
					},
					{
						"key": "Referer",
						"value": "https://id.atlassian.com/"
					},
					{
						"key": "Content-Type",
						"value": "application/json"
					},
					{
						"key": "Auth0-Client",
						"value": "eyJuYW1lIjoiYXV0aDAuanMiLCJ2ZXJzaW9uIjoiOS43LjIifQ=="
					},
					{
						"key": "Origin",
						"value": "https://id.atlassian.com"
					},
					{
						"key": "Connection",
						"value": "keep-alive"
					},
					{
						"key": "Cookie",
						"value": "ajs_group_id=null; ajs_anonymous_id=%22191175dc-a733-4f4d-af48-ed000199d6ca%22; ajs_user_id=%225e3af92c1b1d910e5dfdb670%22; atlCohort={bucketAll:{bucketedAtUTC:2020-02-05T17:27:37.400Z,version:2,index:96,bucketId:0}}; did=s%3Av0%3Ad7fdbef0-483c-11ea-8971-7db382d5130b.llvBtWKAOWUEg%2Bj2kKzllzIyAzH4RmVlU7FHNrLWPAQ; did_compat=s%3Av0%3Ad7fdbef0-483c-11ea-8971-7db382d5130b.llvBtWKAOWUEg%2Bj2kKzllzIyAzH4RmVlU7FHNrLWPAQ; __aid_user_id=5e3af92c1b1d910e5dfdb670; OptanonConsent=landingPath=NotLandingPage&datestamp=Fri+Feb+28+2020+23%3A16%3A14+GMT%2B0100+(Central+European+Standard+Time)&version=4.3.3&EU=true&groups=0_144275%3A1%2C101%3A1%2C1%3A1%2C2%3A1%2C103%3A1%2C0_144389%3A1%2C105%3A1%2C3%3A1%2C0_145087%3A1%2C112%3A1%2C0_145849%3A1%2C4%3A1%2C113%3A1%2C0_146519%3A1%2C125%3A1%2C0_147366%3A1%2C126%3A1%2C0_149658%3A1%2C127%3A1%2C0_150360%3A1%2C128%3A1%2C0_150361%3A1%2C131%3A1%2C0_152586%3A1%2C134%3A1%2C0_177825%3A1%2C0_144574%3A1%2C0_145089%3A1%2C0_147243%3A1%2C0_147316%3A1%2C0_147317%3A1%2C0_147320%3A1%2C0_147327%3A1%2C0_150364%3A1%2C0_150452%3A1%2C0_151725%3A1%2C0_151744%3A1%2C0_151754%3A1%2C0_155093%3A1%2C0_152355%3A1%2C0_147367%3A1%2C0_162785%3A1%2C0_148475%3A1%2C0_154648%3A1%2C0_147315%3A1%2C0_154645%3A1%2C0_155091%3A1%2C0_142671%3A1%2C0_154646%3A1%2C0_155092%3A1%2C0_150368%3A1; optimizelyEndUserId=oeu1582928168327r0.0031812836513410714; OptanonAlertBoxClosed=2020-02-28T22:16:14.503Z; _sio=191175dc-a733-4f4d-af48-ed000199d6ca; _gcl_au=1.1.1238241613.1582928175; seg_xid=c4bc8210-7efc-45a0-b187-c844e8ecc4a3; _biz_uid=83553d5e55a049619009303e6c2cba7a; _biz_nA=1; _biz_pendingA=%5B%5D; ei_client_id=5e599130d43c58001057e2ef; _biz_flagsA=%7B%22Version%22%3A1%2C%22XDomain%22%3A%221%22%7D; _ga=GA1.2.521151136.1582928178; _mkto_trk=id:594-ATC-127&token:_mch-atlassian.com-1582928178126-81442; _fbp=fb.1.1582928178539.1808496709; ctm={'pgv':6443068458204814|'vst':3024678334065520|'vstr':3900178405117656|'intr':1582928181119|'v':1}; __CT_Data=gpv=1&ckp=tld&dm=atlassian.com&apv_45_www33=1&cpv_45_www33=1; __cid=b2a9c298-d299-4812-888a-db8954b46ee4-5d14d95d57268983a654ad15"
					},
					{
						"key": "TE",
						"value": "Trailers"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\t\"client_id\":\"{{client_id}}\",\n\t\"username\":\"wrongUserName\",\n\t\"password\":\"\",\n\t\"realm\":\"eyJhcHBsaWNhdGlvbktleSI6ImppcmEifQ==\",\n\t\"credential_type\":\"http://auth0.com/oauth/grant-type/password-realm\"\n\t}"
				},
				"url": {
					"raw": "https://auth.atlassian.com/co/authenticate",
					"protocol": "https",
					"host": [
						"auth",
						"atlassian",
						"com"
					],
					"path": [
						"co",
						"authenticate"
					]
				}
			},
			"response": []
		},
		{
			"name": "log in,  enter right password in username field and  enter right username in password field",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "cc0c8f51-edbe-44b5-995a-fe49960a130a",
						"exec": [
							"pm.test(\"Status code is 429\",function(){",
							"    pm.response.to.have.status(429);",
							"});",
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "User-Agent",
						"value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:73.0) Gecko/20100101 Firefox/73.0"
					},
					{
						"key": "Accept",
						"value": "*/*"
					},
					{
						"key": "Accept-Language",
						"value": "en-US,en;q=0.5"
					},
					{
						"key": "Referer",
						"value": "https://id.atlassian.com/"
					},
					{
						"key": "Content-Type",
						"value": "application/json"
					},
					{
						"key": "Auth0-Client",
						"value": "eyJuYW1lIjoiYXV0aDAuanMiLCJ2ZXJzaW9uIjoiOS43LjIifQ=="
					},
					{
						"key": "Origin",
						"value": "https://id.atlassian.com"
					},
					{
						"key": "Connection",
						"value": "keep-alive"
					},
					{
						"key": "Cookie",
						"value": "ajs_group_id=null; ajs_anonymous_id=%22191175dc-a733-4f4d-af48-ed000199d6ca%22; ajs_user_id=%225e3af92c1b1d910e5dfdb670%22; atlCohort={bucketAll:{bucketedAtUTC:2020-02-05T17:27:37.400Z,version:2,index:96,bucketId:0}}; did=s%3Av0%3Ad7fdbef0-483c-11ea-8971-7db382d5130b.llvBtWKAOWUEg%2Bj2kKzllzIyAzH4RmVlU7FHNrLWPAQ; did_compat=s%3Av0%3Ad7fdbef0-483c-11ea-8971-7db382d5130b.llvBtWKAOWUEg%2Bj2kKzllzIyAzH4RmVlU7FHNrLWPAQ; __aid_user_id=5e3af92c1b1d910e5dfdb670; OptanonConsent=landingPath=NotLandingPage&datestamp=Fri+Feb+28+2020+23%3A16%3A14+GMT%2B0100+(Central+European+Standard+Time)&version=4.3.3&EU=true&groups=0_144275%3A1%2C101%3A1%2C1%3A1%2C2%3A1%2C103%3A1%2C0_144389%3A1%2C105%3A1%2C3%3A1%2C0_145087%3A1%2C112%3A1%2C0_145849%3A1%2C4%3A1%2C113%3A1%2C0_146519%3A1%2C125%3A1%2C0_147366%3A1%2C126%3A1%2C0_149658%3A1%2C127%3A1%2C0_150360%3A1%2C128%3A1%2C0_150361%3A1%2C131%3A1%2C0_152586%3A1%2C134%3A1%2C0_177825%3A1%2C0_144574%3A1%2C0_145089%3A1%2C0_147243%3A1%2C0_147316%3A1%2C0_147317%3A1%2C0_147320%3A1%2C0_147327%3A1%2C0_150364%3A1%2C0_150452%3A1%2C0_151725%3A1%2C0_151744%3A1%2C0_151754%3A1%2C0_155093%3A1%2C0_152355%3A1%2C0_147367%3A1%2C0_162785%3A1%2C0_148475%3A1%2C0_154648%3A1%2C0_147315%3A1%2C0_154645%3A1%2C0_155091%3A1%2C0_142671%3A1%2C0_154646%3A1%2C0_155092%3A1%2C0_150368%3A1; optimizelyEndUserId=oeu1582928168327r0.0031812836513410714; OptanonAlertBoxClosed=2020-02-28T22:16:14.503Z; _sio=191175dc-a733-4f4d-af48-ed000199d6ca; _gcl_au=1.1.1238241613.1582928175; seg_xid=c4bc8210-7efc-45a0-b187-c844e8ecc4a3; _biz_uid=83553d5e55a049619009303e6c2cba7a; _biz_nA=1; _biz_pendingA=%5B%5D; ei_client_id=5e599130d43c58001057e2ef; _biz_flagsA=%7B%22Version%22%3A1%2C%22XDomain%22%3A%221%22%7D; _ga=GA1.2.521151136.1582928178; _mkto_trk=id:594-ATC-127&token:_mch-atlassian.com-1582928178126-81442; _fbp=fb.1.1582928178539.1808496709; ctm={'pgv':6443068458204814|'vst':3024678334065520|'vstr':3900178405117656|'intr':1582928181119|'v':1}; __CT_Data=gpv=1&ckp=tld&dm=atlassian.com&apv_45_www33=1&cpv_45_www33=1; __cid=b2a9c298-d299-4812-888a-db8954b46ee4-5d14d95d57268983a654ad15"
					},
					{
						"key": "TE",
						"value": "Trailers"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\t\"client_id\":\"{{client_id}}\",\n\t\"username\":\"{{jiraPassowrd}}\",\n\t\"password\":\"{{jiraEmail}}\",\n\t\"realm\":\"eyJhcHBsaWNhdGlvbktleSI6ImppcmEifQ==\",\n\t\"credential_type\":\"http://auth0.com/oauth/grant-type/password-realm\"\n\t}"
				},
				"url": {
					"raw": "https://auth.atlassian.com/co/authenticate",
					"protocol": "https",
					"host": [
						"auth",
						"atlassian",
						"com"
					],
					"path": [
						"co",
						"authenticate"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get  Jira accountId",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "362c6f0a-60d0-4634-b103-0d446b75c8ad",
						"exec": [
							"const response=pm.response.json();",
							"const jiraAccountId=response.accountId;",
							"pm.environment.set('JiraAccountId',jiraAccountId);",
							"",
							"pm.test(\"Status code is 200\", function () {",
							"    pm.response.to.have.status(200);",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"auth": {
					"type": "basic",
					"basic": [
						{
							"key": "password",
							"value": "{{jiraToken}}",
							"type": "string"
						},
						{
							"key": "username",
							"value": "{{jiraEmail}}",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [],
				"url": {
					"raw": "https://{{Your-domain}}.atlassian.net/rest/api/2/myself",
					"protocol": "https",
					"host": [
						"{{Your-domain}}",
						"atlassian",
						"net"
					],
					"path": [
						"rest",
						"api",
						"2",
						"myself"
					]
				}
			},
			"response": []
		},
		{
			"name": "Create project",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "b916b394-f4a7-4050-a1a8-ea7648a34c50",
						"exec": [
							"const response=pm.response.json();",
							"",
							"const jiraProjectId=response.id;",
							"pm.environment.set('JiraProjectId',jiraProjectId);",
							"",
							"const jiraProjectKey=response.key;",
							"pm.environment.set('JiraProjectKey',jiraProjectKey);",
							"",
							"pm.test(\"Status code is 201\", function () {",
							"    pm.response.to.have.status(201);",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"auth": {
					"type": "basic",
					"basic": [
						{
							"key": "password",
							"value": "{{jiraToken}}",
							"type": "string"
						},
						{
							"key": "username",
							"value": "{{jiraEmail}}",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [
					{
						"key": "Accept",
						"value": "application/json",
						"type": "text"
					},
					{
						"key": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\r\n\t\"key\": \"REST\",\r\n    \"name\": \"REST API Example Project\",\r\n    \"projectTemplateKey\": \"com.pyxis.greenhopper.jira:gh-simplified-scrum-classic\",\r\n    \"projectTypeKey\": \"software\",\r\n    \"description\": \"REST API Example Project description\",\r\n     \"assigneeType\": \"PROJECT_LEAD\",\r\n     \"url\": \"http://atlassian.com\",\r\n    \"leadAccountId\" : \"{{JiraAccountId}}\"\r\n    \r\n}"
				},
				"url": {
					"raw": "https://{{Your-domain}}.atlassian.net/rest/api/2/project",
					"protocol": "https",
					"host": [
						"{{Your-domain}}",
						"atlassian",
						"net"
					],
					"path": [
						"rest",
						"api",
						"2",
						"project"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get  filterID",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "0eb6a9d9-3b12-48a0-b6ef-a7824418576a",
						"exec": [
							"const response=pm.response.json();",
							"const filterId=response[0].id;",
							"pm.environment.set('FilterId',filterId);",
							"",
							"pm.test(\"Status code is 200\", function () {",
							"    pm.response.to.have.status(200);",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"auth": {
					"type": "basic",
					"basic": [
						{
							"key": "password",
							"value": "{{jiraToken}}",
							"type": "string"
						},
						{
							"key": "username",
							"value": "{{jiraEmail}}",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [
					{
						"key": "Accept",
						"value": "application/json",
						"type": "text"
					}
				],
				"url": {
					"raw": "https://{{Your-domain}}.atlassian.net/rest/api/3/filter/my",
					"protocol": "https",
					"host": [
						"{{Your-domain}}",
						"atlassian",
						"net"
					],
					"path": [
						"rest",
						"api",
						"3",
						"filter",
						"my"
					]
				}
			},
			"response": []
		},
		{
			"name": "Create board",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "102f5d61-ce4d-4f09-b123-026557d46437",
						"exec": [
							"const response=pm.response.json();",
							"var jiraBoradId2=response.id;",
							"pm.environment.set('jiraBoardId2',jiraBoradId2);",
							"",
							"pm.test(\"Status code is 201\", function () {",
							"    pm.response.to.have.status(201);",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"auth": {
					"type": "basic",
					"basic": [
						{
							"key": "password",
							"value": "{{jiraToken}}",
							"type": "string"
						},
						{
							"key": "username",
							"value": "{{jiraEmail}}",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [
					{
						"key": "Accept",
						"value": "application/json",
						"type": "text"
					},
					{
						"key": "Content-Type",
						"value": "application/json",
						"type": "text"
					},
					{
						"key": "",
						"value": "",
						"type": "text",
						"disabled": true
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"name\":\"{{JiraProjectKey}} board 2\",\n  \"type\": \"scrum\",\n  \"filterId\": \"{{FilterId}}\",\n  \"location\":\n  {\n    \"type\": \"project\",\n    \"projectKeyOrId\": \"{{JiraProjectId}}\"\n  }\n}"
				},
				"url": {
					"raw": "https://{{Your-domain}}.atlassian.net/rest/agile/1.0/board",
					"protocol": "https",
					"host": [
						"{{Your-domain}}",
						"atlassian",
						"net"
					],
					"path": [
						"rest",
						"agile",
						"1.0",
						"board"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get all boards",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "1d87e237-60fc-4313-a624-3b28643f5933",
						"exec": [
							"const response=pm.response.json();",
							"var jiraBoradId=response.values[0].id;",
							"pm.environment.set('jiraBoardId',jiraBoradId);",
							"",
							"pm.test(\"Status code is 200\", function () {",
							"    pm.response.to.have.status(200);",
							"});",
							" pm.test(\"Check boards id and type\", function () {",
							"    for(let value of response.values ){",
							"    if(value.name==\"{{JiraProjectKey}} board 2\"){",
							"    ",
							"   pm.expect(value.id).to.eql(pm.environment.get(\"jiraBoardId2\"));",
							"    pm.expect(value.type).to.eql(\"scrum\");",
							"}}});",
							"",
							"",
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"auth": {
					"type": "basic",
					"basic": [
						{
							"key": "password",
							"value": "{{jiraToken}}",
							"type": "string"
						},
						{
							"key": "username",
							"value": "{{jiraEmail}}",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [
					{
						"key": "Accept",
						"value": "application/json",
						"type": "text"
					}
				],
				"url": {
					"raw": "https://{{Your-domain}}.atlassian.net/rest/agile/1.0/board",
					"protocol": "https",
					"host": [
						"{{Your-domain}}",
						"atlassian",
						"net"
					],
					"path": [
						"rest",
						"agile",
						"1.0",
						"board"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get board by filter",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "6e4089cd-6214-4a14-a77b-8cca78d923f1",
						"exec": [
							"pm.test(\"Status code is 200\", function () {",
							"    pm.response.to.have.status(200);",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"auth": {
					"type": "basic",
					"basic": [
						{
							"key": "password",
							"value": "{{jiraToken}}",
							"type": "string"
						},
						{
							"key": "username",
							"value": "{{jiraEmail}}",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [],
				"url": {
					"raw": "https://{{Your-domain}}.atlassian.net/rest/agile/1.0/board/filter/{{FilterId}}",
					"protocol": "https",
					"host": [
						"{{Your-domain}}",
						"atlassian",
						"net"
					],
					"path": [
						"rest",
						"agile",
						"1.0",
						"board",
						"filter",
						"{{FilterId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get project",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "435c0810-2357-44da-a2f8-252674cc0ed4",
						"exec": [
							"pm.test(\"Status code is 200\", function () {",
							"    pm.response.to.have.status(200);",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"auth": {
					"type": "basic",
					"basic": [
						{
							"key": "password",
							"value": "{{jiraToken}}",
							"type": "string"
						},
						{
							"key": "username",
							"value": "{{jiraEmail}}",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [
					{
						"key": "Accept",
						"value": "application/json",
						"type": "text"
					}
				],
				"url": {
					"raw": "https://{{Your-domain}}.atlassian.net/rest/agile/1.0/board/{{jiraBoardId}}/project",
					"protocol": "https",
					"host": [
						"{{Your-domain}}",
						"atlassian",
						"net"
					],
					"path": [
						"rest",
						"agile",
						"1.0",
						"board",
						"{{jiraBoardId}}",
						"project"
					]
				}
			},
			"response": []
		},
		{
			"name": "Create issue-epic",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "cdcd7a98-01a4-475a-97fa-255ea629bf6f",
						"exec": [
							"const response=pm.response.json();",
							"const epicId=response.id;",
							"pm.environment.set('EpicId',epicId);",
							"",
							"pm.test(\"Status code is 201\", function () {",
							"    pm.response.to.have.status(201);",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"auth": {
					"type": "basic",
					"basic": [
						{
							"key": "password",
							"value": "{{jiraToken}}",
							"type": "string"
						},
						{
							"key": "username",
							"value": "{{jiraEmail}}",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"name": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\t\"fields\":{\n\t\t\t\t\"customfield_10011\":\"this create in jira epic\",\n\t\t\t\t\n\t\t\t\t\"summary\":\"This request to create epic\",\n\t\t\t\t\n\t\t\t\t\"project\":{\n\t\t\t\t\t\t\"id\":\"{{JiraProjectId}}\"\n\t\t\t\t\t},\n\t\t\t\t\"issuetype\":{\n\t\t\t\t\t\t\n\t\t\t\t\t\t\"id\":\"10000\"\n\t\t\t\t\t\n\t\t\t\t\t}\n\t\t\t\t\t\t\n\t\t\t}\n} ",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "https://{{Your-domain}}.atlassian.net/rest/api/2/issue",
					"protocol": "https",
					"host": [
						"{{Your-domain}}",
						"atlassian",
						"net"
					],
					"path": [
						"rest",
						"api",
						"2",
						"issue"
					]
				}
			},
			"response": []
		},
		{
			"name": "Create version unrelease",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "aa7b6b57-f010-4b7f-9fe3-dcee60e80187",
						"exec": [
							"const response=pm.response.json();",
							"const versionId=response.id;",
							"pm.environment.set('VersionId',versionId);",
							"",
							"pm.test(\"Status code is 201\", function () {",
							"    pm.response.to.have.status(201);",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"auth": {
					"type": "basic",
					"basic": [
						{
							"key": "password",
							"value": "{{jiraToken}}",
							"type": "string"
						},
						{
							"key": "username",
							"value": "{{jiraEmail}}",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"name": "Content-Type",
						"value": "application/json",
						"type": "text"
					},
					{
						"key": "Accept",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"archived\": false,\n    \"startDate\":\"2020-03-06\",\n\t\"releaseDate\":\"2020-03-16\",\n\t\"name\": \"Release 1\",\n\t\"description\": \"This is release 1 with two stories\",\n\t\"projectId\": \"{{JiraProjectId}}\",\n\t \"released\": false\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "https://{{Your-domain}}.atlassian.net/rest/api/3/version",
					"protocol": "https",
					"host": [
						"{{Your-domain}}",
						"atlassian",
						"net"
					],
					"path": [
						"rest",
						"api",
						"3",
						"version"
					]
				}
			},
			"response": []
		},
		{
			"name": "Create component",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "3d0d6642-e808-4235-a38f-f316e95b7771",
						"exec": [
							"const response=pm.response.json();",
							"const componentId=response.id;",
							"pm.environment.set('ComponentId',componentId);",
							"",
							"pm.test(\"Status code is 201\", function () {",
							"    pm.response.to.have.status(201);",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"auth": {
					"type": "basic",
					"basic": [
						{
							"key": "password",
							"value": "{{jiraToken}}",
							"type": "string"
						},
						{
							"key": "username",
							"value": "{{jiraEmail}}",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [
					{
						"key": "Accept",
						"value": "application/json",
						"type": "text"
					},
					{
						"key": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"isAssigneeTypeValid\": false,\n  \"name\": \"Team 1\",\n  \"description\": \"This is a first Jira team with release 1\",\n  \"project\": \"{{JiraProjectKey}}\"\n\n}"
				},
				"url": {
					"raw": "https://{{Your-domain}}.atlassian.net/rest/api/3/component",
					"protocol": "https",
					"host": [
						"{{Your-domain}}",
						"atlassian",
						"net"
					],
					"path": [
						"rest",
						"api",
						"3",
						"component"
					]
				}
			},
			"response": []
		},
		{
			"name": "create issue-story",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "5e640abb-7f6a-4fa2-919d-697c65a8b706",
						"exec": [
							"const response=pm.response.json();",
							"const issueResponse=response.issues;",
							"",
							"pm.environment.set(\"issuesKey1\", issueResponse[0].key);",
							"pm.environment.set(\"issuesKey2\", issueResponse[1].key);",
							"pm.environment.set(\"issuesKey3\", issueResponse[2].key);",
							"",
							"pm.test(\"Status code is 201\", function () {",
							"    pm.response.to.have.status(201);",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"auth": {
					"type": "basic",
					"basic": [
						{
							"key": "password",
							"value": "{{jiraToken}}",
							"type": "string"
						},
						{
							"key": "username",
							"value": "{{jiraEmail}}",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [
					{
						"key": "Accept",
						"value": "application/json",
						"type": "text"
					},
					{
						"key": "Content-Type",
						"name": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "\n {\"issueUpdates\": [\n        {\n            \"fields\": {\n                \"project\": {\n                    \"id\": \"{{JiraProjectId}}\"\n                },\n                \"summary\": \"REST API Example Task 1\",\n                \"issuetype\": {\n                    \"id\": \"10006\"\n                },\n              \n                \"priority\": {\n                    \"id\": \"1\"\n                },\n                      \"components\": [\n    \t\t\t\t\t\t\t\t  {\n    \t\t\t\t\t\t\t\t    \"id\": \"{{ComponentId}}\"\n    \t\t\t\t\t\t\t\t  }\n\t\t\t\t\t\t\t\t   ],\n\t\t\t\t\t\t\t\t   \"fixVersions\": [\n    \t\t\t\t\t\t\t\t\t\t  {\n    \t\t\t\t\t\t\t\t\t\t  \"id\": \"{{VersionId}}\"\n    \t\t\t\t\t\t\t\t\t\t\t  }\n\t\t\t\t\t\t\t\t\t\t\t ],\n               \n                \"description\": \"This is an example task created through the REST API.\"\n            }\n        },\n        {\n            \"fields\": {\n                \"project\": {\n                    \"id\": \"{{JiraProjectId}}\"\n                },\n                \"summary\": \"REST API Example Task 2\",\n                \"issuetype\": {\n                    \"id\": \"10006\"\n                },\n\n                \"priority\": {\n                    \"id\": \"2\"\n                },\n                \n                 \"fixVersions\": [\n    \t\t\t\t\t\t\t\t\t\t  {\n    \t\t\t\t\t\t\t\t\t\t  \"id\": \"{{VersionId}}\"\n    \t\t\t\t\t\t\t\t\t\t\t  }\n\t\t\t\t\t\t\t\t\t\t\t ],\n            \n                         \"components\": [\n      {\n        \"id\": \"{{ComponentId}}\"\n      }\n    ],\n                \"description\": \"This is an example task created through the REST API.\"\n            }\n        },\n         {\n            \"fields\": {\n                \"project\": {\n                    \"id\": \"{{JiraProjectId}}\"\n                },\n                \"summary\": \"REST API Example Task 3\",\n                \"issuetype\": {\n                    \"id\": \"10006\"\n                },\n               \n                \"priority\": {\n                    \"id\": \"3\"\n                },\n       \n                \"description\": \"This is an example task created through the REST API.\"\n            }\n        }\n    ]}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "https://{{Your-domain}}.atlassian.net/rest/api/2/issue/bulk",
					"protocol": "https",
					"host": [
						"{{Your-domain}}",
						"atlassian",
						"net"
					],
					"path": [
						"rest",
						"api",
						"2",
						"issue",
						"bulk"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get issue",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "47c8f039-5572-4506-a11d-58e812ae7e12",
						"exec": [
							"pm.test(\"Status code is 200\", function () {",
							"    pm.response.to.have.status(200);",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"auth": {
					"type": "basic",
					"basic": [
						{
							"key": "password",
							"value": "{{jiraToken}}",
							"type": "string"
						},
						{
							"key": "username",
							"value": "{{jiraEmail}}",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [
					{
						"key": "Accept",
						"value": "application/json",
						"type": "text"
					}
				],
				"url": {
					"raw": "https://{{Your-domain}}.atlassian.net/rest/agile/1.0/board/{{jiraBoardId2}}/issue",
					"protocol": "https",
					"host": [
						"{{Your-domain}}",
						"atlassian",
						"net"
					],
					"path": [
						"rest",
						"agile",
						"1.0",
						"board",
						"{{jiraBoardId2}}",
						"issue"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get epic",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "884b889c-8a93-48db-9e5a-e5bafc37d485",
						"exec": [
							"pm.test(\"Status code is 200\", function () {",
							"    pm.response.to.have.status(200);",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"auth": {
					"type": "basic",
					"basic": [
						{
							"key": "password",
							"value": "{{jiraToken}}",
							"type": "string"
						},
						{
							"key": "username",
							"value": "{{jiraEmail}}",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [
					{
						"key": "Accept",
						"value": "application/json",
						"type": "text"
					}
				],
				"url": {
					"raw": "https://{{Your-domain}}.atlassian.net/rest/agile/1.0/epic/{{EpicId}}",
					"protocol": "https",
					"host": [
						"{{Your-domain}}",
						"atlassian",
						"net"
					],
					"path": [
						"rest",
						"agile",
						"1.0",
						"epic",
						"{{EpicId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "Create sprint",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "14ba9b2f-1d73-4b0a-b667-5cae152fd96a",
						"exec": [
							"const response=pm.response.json();",
							"var jiraSprintId=response.id;",
							"pm.environment.set('JiraSprintId',jiraSprintId);",
							"",
							"pm.test(\"Status code is 201\", function () {",
							"    pm.response.to.have.status(201);",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"auth": {
					"type": "basic",
					"basic": [
						{
							"key": "password",
							"value": "{{jiraToken}}",
							"type": "string"
						},
						{
							"key": "username",
							"value": "{{jiraEmail}}",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [
					{
						"key": "Accept",
						"value": "application/json",
						"type": "text"
					},
					{
						"key": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"name\": \"REST API Sprint\",\n  \"startDate\": \"2020-03-02\",\n  \"endDate\": \"2020-03-15\",\n  \"originBoardId\": \"{{jiraBoardId2}}\",\n  \"goal\": \"2 stories\"\n}"
				},
				"url": {
					"raw": "https://{{Your-domain}}.atlassian.net/rest/agile/1.0/sprint",
					"protocol": "https",
					"host": [
						"{{Your-domain}}",
						"atlassian",
						"net"
					],
					"path": [
						"rest",
						"agile",
						"1.0",
						"sprint"
					]
				}
			},
			"response": []
		},
		{
			"name": "Update sprint",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "ada3cd9c-7b62-4c01-baed-61e1677f7393",
						"exec": [
							"pm.test(\"Status code is 200\", function () {",
							"    pm.response.to.have.status(200);",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"auth": {
					"type": "basic",
					"basic": [
						{
							"key": "password",
							"value": "{{jiraToken}}",
							"type": "string"
						},
						{
							"key": "username",
							"value": "{{jiraEmail}}",
							"type": "string"
						}
					]
				},
				"method": "PUT",
				"header": [
					{
						"key": "Content-Type",
						"name": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"id\": 7,\n    \"self\": \"https://testning.atlassian.net/rest/agile/1.0/sprint/7\",\n    \"state\": \"future\",\n    \"name\": \"Update date sprint\",\n    \"startDate\": \"2020-03-06T00:00:00.000Z\",\n    \"endDate\": \"2020-03-15T00:00:00.000Z\",\n    \"originBoardId\": \"{{jiraBoardId2}}\",\n    \"goal\": \"2 stories\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "https://{{Your-domain}}.atlassian.net/rest/agile/1.0/sprint/{{JiraSprintId}}",
					"protocol": "https",
					"host": [
						"{{Your-domain}}",
						"atlassian",
						"net"
					],
					"path": [
						"rest",
						"agile",
						"1.0",
						"sprint",
						"{{JiraSprintId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get sprint",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "b3b732dd-662d-426d-8470-b7559a371bbb",
						"exec": [
							"pm.test(\"Status code is 200\", function () {",
							"    pm.response.to.have.status(200);",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"auth": {
					"type": "basic",
					"basic": [
						{
							"key": "password",
							"value": "{{jiraToken}}",
							"type": "string"
						},
						{
							"key": "username",
							"value": "{{jiraEmail}}",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [],
				"url": {
					"raw": "https://{{Your-domain}}.atlassian.net/rest/agile/1.0/sprint/{{JiraSprintId}}",
					"protocol": "https",
					"host": [
						"{{Your-domain}}",
						"atlassian",
						"net"
					],
					"path": [
						"rest",
						"agile",
						"1.0",
						"sprint",
						"{{JiraSprintId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get all sprints",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "1b59121a-9c34-4be8-8edd-5d2da0b632bb",
						"exec": [
							"pm.test(\"Status code is 200\", function () {",
							"    pm.response.to.have.status(200);",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"auth": {
					"type": "basic",
					"basic": [
						{
							"key": "password",
							"value": "{{jiraToken}}",
							"type": "string"
						},
						{
							"key": "username",
							"value": "{{jiraEmail}}",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [
					{
						"key": "Accept",
						"value": "application/json",
						"type": "text"
					}
				],
				"url": {
					"raw": "https://{{Your-domain}}.atlassian.net/rest/agile/1.0/board/{{jiraBoardId2}}/sprint",
					"protocol": "https",
					"host": [
						"{{Your-domain}}",
						"atlassian",
						"net"
					],
					"path": [
						"rest",
						"agile",
						"1.0",
						"board",
						"{{jiraBoardId2}}",
						"sprint"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get issues from sprint",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "1f70e4a5-1883-4c04-80b0-c1eb25ba9b82",
						"exec": [
							"pm.test(\"Status code is 200\", function () {",
							"    pm.response.to.have.status(200);",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"auth": {
					"type": "basic",
					"basic": [
						{
							"key": "password",
							"value": "{{jiraToken}}",
							"type": "string"
						},
						{
							"key": "username",
							"value": "{{jiraEmail}}",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [
					{
						"key": "Accept",
						"value": "application/json",
						"type": "text"
					}
				],
				"url": {
					"raw": "https://{{Your-domain}}.atlassian.net/rest/agile/1.0/board/{{jiraBoardId2}}/sprint/{{JiraSprintId}}/issue",
					"protocol": "https",
					"host": [
						"{{Your-domain}}",
						"atlassian",
						"net"
					],
					"path": [
						"rest",
						"agile",
						"1.0",
						"board",
						"{{jiraBoardId2}}",
						"sprint",
						"{{JiraSprintId}}",
						"issue"
					]
				}
			},
			"response": []
		},
		{
			"name": "Remove issues from epic",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "9b7e621d-0d75-457c-a7fc-0a255abf15fc",
						"exec": [
							"pm.test(\"Status code is 204\", function () {",
							"    pm.response.to.have.status(204);",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"auth": {
					"type": "basic",
					"basic": [
						{
							"key": "password",
							"value": "{{jiraToken}}",
							"type": "string"
						},
						{
							"key": "username",
							"value": "{{jiraEmail}}",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [
					{
						"key": "Accept",
						"value": "application/json",
						"type": "text"
					},
					{
						"key": "Content-Type",
						"name": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\"issues\":[\n\t]\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "https://{{Your-domain}}.atlassian.net/rest/agile/1.0/epic/none/issue",
					"protocol": "https",
					"host": [
						"{{Your-domain}}",
						"atlassian",
						"net"
					],
					"path": [
						"rest",
						"agile",
						"1.0",
						"epic",
						"none",
						"issue"
					]
				}
			},
			"response": []
		},
		{
			"name": "move issues to sprint ",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "fed08f20-c26f-4a5b-b35c-d2e3d89aeab4",
						"exec": [
							"pm.test(\"Status code is 204\", function () {",
							"    pm.response.to.have.status(204);",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"auth": {
					"type": "basic",
					"basic": [
						{
							"key": "password",
							"value": "{{jiraToken}}",
							"type": "string"
						},
						{
							"key": "username",
							"value": "{{jiraEmail}}",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [
					{
						"key": "Accept",
						"value": "application/json",
						"type": "text"
					},
					{
						"key": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\t\"issues\": [\"{{issuesKey1}}\",\"{{issuesKey2}}\" ]\n\n}"
				},
				"url": {
					"raw": "https://{{Your-domain}}.atlassian.net/rest/agile/1.0/sprint/{{JiraSprintId}}/issue",
					"protocol": "https",
					"host": [
						"{{Your-domain}}",
						"atlassian",
						"net"
					],
					"path": [
						"rest",
						"agile",
						"1.0",
						"sprint",
						"{{JiraSprintId}}",
						"issue"
					]
				}
			},
			"response": []
		},
		{
			"name": "Sprint start",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "6f706b2e-5189-4e09-af5e-7c9c384f422c",
						"exec": [
							"pm.test(\"Status code is 200\", function () {",
							"    pm.response.to.have.status(200);",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"auth": {
					"type": "basic",
					"basic": [
						{
							"key": "password",
							"value": "{{jiraToken}}",
							"type": "string"
						},
						{
							"key": "username",
							"value": "{{jiraEmail}}",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"name": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\t\"state\":\"active\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "https://{{Your-domain}}.atlassian.net/rest/agile/1.0/sprint/{{JiraSprintId}}",
					"protocol": "https",
					"host": [
						"{{Your-domain}}",
						"atlassian",
						"net"
					],
					"path": [
						"rest",
						"agile",
						"1.0",
						"sprint",
						"{{JiraSprintId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "In progress issue 1",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "50c5f2d4-34c3-4ab5-b57a-8e04e1e75688",
						"exec": [
							"pm.test(\"Status code is 204\", function () {",
							"    pm.response.to.have.status(204);",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"auth": {
					"type": "basic",
					"basic": [
						{
							"key": "password",
							"value": "{{jiraToken}}",
							"type": "string"
						},
						{
							"key": "username",
							"value": "{{jiraEmail}}",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"name": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "  {\r\n  \t\"transition\": {\r\n    \"id\": \"21\"\r\n\t\t\t}\r\n  }",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "https://{{Your-domain}}.atlassian.net/rest/api/2/issue/{{issuesKey1}}/transitions",
					"protocol": "https",
					"host": [
						"{{Your-domain}}",
						"atlassian",
						"net"
					],
					"path": [
						"rest",
						"api",
						"2",
						"issue",
						"{{issuesKey1}}",
						"transitions"
					]
				}
			},
			"response": []
		},
		{
			"name": "Done issue 1",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "f309a059-be95-4bd7-bebd-444b36918898",
						"exec": [
							"pm.test(\"Status code is 204\", function () {",
							"    pm.response.to.have.status(204);",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"auth": {
					"type": "basic",
					"basic": [
						{
							"key": "password",
							"value": "{{jiraToken}}",
							"type": "string"
						},
						{
							"key": "username",
							"value": "{{jiraEmail}}",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"name": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "  {\r\n  \t\"transition\": {\r\n    \"id\": \"31\"\r\n\t\t\t}\r\n  }",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "https://{{Your-domain}}.atlassian.net/rest/api/2/issue/{{issuesKey1}}/transitions",
					"protocol": "https",
					"host": [
						"{{Your-domain}}",
						"atlassian",
						"net"
					],
					"path": [
						"rest",
						"api",
						"2",
						"issue",
						"{{issuesKey1}}",
						"transitions"
					]
				}
			},
			"response": []
		},
		{
			"name": "In progress issue 2",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "a290cd92-df7f-48ee-8dbc-fbeeca99821e",
						"exec": [
							"pm.test(\"Status code is 204\", function () {",
							"    pm.response.to.have.status(204);",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"auth": {
					"type": "basic",
					"basic": [
						{
							"key": "password",
							"value": "{{jiraToken}}",
							"type": "string"
						},
						{
							"key": "username",
							"value": "{{jiraEmail}}",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"name": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "  {\r\n  \t\"transition\": {\r\n    \"id\": \"21\"\r\n\t\t\t}\r\n  }",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "https://{{Your-domain}}.atlassian.net/rest/api/2/issue/{{issuesKey2}}/transitions",
					"protocol": "https",
					"host": [
						"{{Your-domain}}",
						"atlassian",
						"net"
					],
					"path": [
						"rest",
						"api",
						"2",
						"issue",
						"{{issuesKey2}}",
						"transitions"
					]
				}
			},
			"response": []
		},
		{
			"name": "Done issue 2",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "22a94c20-a598-4f83-ab4c-9cd6fd113658",
						"exec": [
							"pm.test(\"Status code is 204\", function () {",
							"    pm.response.to.have.status(204);",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"auth": {
					"type": "basic",
					"basic": [
						{
							"key": "password",
							"value": "{{jiraToken}}",
							"type": "string"
						},
						{
							"key": "username",
							"value": "{{jiraEmail}}",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"name": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "  {\r\n  \t\"transition\": {\r\n    \"id\": \"31\"\r\n\t\t\t}\r\n  }",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "https://{{Your-domain}}.atlassian.net/rest/api/2/issue/{{issuesKey2}}/transitions",
					"protocol": "https",
					"host": [
						"{{Your-domain}}",
						"atlassian",
						"net"
					],
					"path": [
						"rest",
						"api",
						"2",
						"issue",
						"{{issuesKey2}}",
						"transitions"
					]
				}
			},
			"response": []
		},
		{
			"name": "Sprint close",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "f2204412-f717-49cb-a062-bd98b4153f9c",
						"exec": [
							"pm.test(\"Status code is 200\", function () {",
							"    pm.response.to.have.status(200);",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"auth": {
					"type": "basic",
					"basic": [
						{
							"key": "password",
							"value": "{{jiraToken}}",
							"type": "string"
						},
						{
							"key": "username",
							"value": "{{jiraEmail}}",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"name": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\t\"state\":\"closed\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "https://{{Your-domain}}.atlassian.net/rest/agile/1.0/sprint/{{JiraSprintId}}",
					"protocol": "https",
					"host": [
						"{{Your-domain}}",
						"atlassian",
						"net"
					],
					"path": [
						"rest",
						"agile",
						"1.0",
						"sprint",
						"{{JiraSprintId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "Release version",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "a9de9f58-06c9-40f0-91c0-fe8468086870",
						"exec": [
							"pm.test(\"Status code is 200\", function () {",
							"    pm.response.to.have.status(200);",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"auth": {
					"type": "basic",
					"basic": [
						{
							"key": "password",
							"value": "{{jiraToken}}",
							"type": "string"
						},
						{
							"key": "username",
							"value": "{{jiraEmail}}",
							"type": "string"
						}
					]
				},
				"method": "PUT",
				"header": [
					{
						"key": "Content-Type",
						"name": "Content-Type",
						"value": "application/json",
						"type": "text"
					},
					{
						"key": "Accept",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": " {\n \t\"id\":\"{{VersionId}}\",\n \t\"released\": true\n \t\n }",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "https://{{Your-domain}}.atlassian.net/rest/api/2/version/{{VersionId}}",
					"protocol": "https",
					"host": [
						"{{Your-domain}}",
						"atlassian",
						"net"
					],
					"path": [
						"rest",
						"api",
						"2",
						"version",
						"{{VersionId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "Archive version",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "0064df1c-5280-414c-965d-2a8fdb5ae839",
						"exec": [
							"pm.test(\"Status code is 200\", function () {",
							"    pm.response.to.have.status(200);",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"auth": {
					"type": "basic",
					"basic": [
						{
							"key": "password",
							"value": "{{jiraToken}}",
							"type": "string"
						},
						{
							"key": "username",
							"value": "{{jiraEmail}}",
							"type": "string"
						}
					]
				},
				"method": "PUT",
				"header": [
					{
						"key": "Accept",
						"value": "application/json",
						"type": "text"
					},
					{
						"key": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\t\"id\":\"{{VersionId}}\",\n\t\"archived\":true\n\t\n}"
				},
				"url": {
					"raw": "https://{{Your-domain}}.atlassian.net/rest/api/2/version/{{VersionId}}",
					"protocol": "https",
					"host": [
						"{{Your-domain}}",
						"atlassian",
						"net"
					],
					"path": [
						"rest",
						"api",
						"2",
						"version",
						"{{VersionId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "Delete sprint",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "917f7bad-f353-49b3-8735-abf85d830969",
						"exec": [
							"pm.test(\"Status code is 204\", function () {",
							"    pm.response.to.have.status(204);",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"auth": {
					"type": "basic",
					"basic": [
						{
							"key": "password",
							"value": "{{jiraToken}}",
							"type": "string"
						},
						{
							"key": "username",
							"value": "{{jiraEmail}}",
							"type": "string"
						}
					]
				},
				"method": "DELETE",
				"header": [],
				"url": {
					"raw": "https://{{Your-domain}}.atlassian.net/rest/agile/1.0/sprint/{{JiraSprintId}}",
					"protocol": "https",
					"host": [
						"{{Your-domain}}",
						"atlassian",
						"net"
					],
					"path": [
						"rest",
						"agile",
						"1.0",
						"sprint",
						"{{JiraSprintId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "Delete board",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "0b86bece-7c97-462d-aaf8-d52bd1c456a3",
						"exec": [
							"pm.test(\"Status code is 204\", function () {",
							"    pm.response.to.have.status(204);",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"auth": {
					"type": "basic",
					"basic": [
						{
							"key": "password",
							"value": "{{jiraToken}}",
							"type": "string"
						},
						{
							"key": "username",
							"value": "{{jiraEmail}}",
							"type": "string"
						}
					]
				},
				"method": "DELETE",
				"header": [
					{
						"key": "ac",
						"value": "",
						"type": "text",
						"disabled": true
					}
				],
				"url": {
					"raw": "https://{{Your-domain}}.atlassian.net/rest/agile/1.0/board/{{jiraBoardId2}}",
					"protocol": "https",
					"host": [
						"{{Your-domain}}",
						"atlassian",
						"net"
					],
					"path": [
						"rest",
						"agile",
						"1.0",
						"board",
						"{{jiraBoardId2}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "Delete project",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "e7afe9d2-e071-4fb8-8e66-3736b94396d7",
						"exec": [
							"pm.test(\"Status code is 204\", function () {",
							"    pm.response.to.have.status(204);",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"auth": {
					"type": "basic",
					"basic": [
						{
							"key": "password",
							"value": "{{jiraToken}}",
							"type": "string"
						},
						{
							"key": "username",
							"value": "{{jiraEmail}}",
							"type": "string"
						}
					]
				},
				"method": "DELETE",
				"header": [],
				"url": {
					"raw": "https://{{Your-domain}}.atlassian.net/rest/api/3/project/{{JiraProjectKey}}",
					"protocol": "https",
					"host": [
						"{{Your-domain}}",
						"atlassian",
						"net"
					],
					"path": [
						"rest",
						"api",
						"3",
						"project",
						"{{JiraProjectKey}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "Delete filter",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "331272f8-5b72-4d07-bc45-1d269f7e031b",
						"exec": [
							"pm.test(\"Status code is 204\", function () {",
							"    pm.response.to.have.status(204);",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"auth": {
					"type": "basic",
					"basic": [
						{
							"key": "password",
							"value": "{{jiraToken}}",
							"type": "string"
						},
						{
							"key": "username",
							"value": "{{jiraEmail}}",
							"type": "string"
						}
					]
				},
				"method": "DELETE",
				"header": [],
				"url": {
					"raw": "https://{{Your-domain}}.atlassian.net/rest/api/3/filter/{{FilterId}}",
					"protocol": "https",
					"host": [
						"{{Your-domain}}",
						"atlassian",
						"net"
					],
					"path": [
						"rest",
						"api",
						"3",
						"filter",
						"{{FilterId}}"
					]
				}
			},
			"response": []
		}
	],
	"protocolProfileBehavior": {}
}