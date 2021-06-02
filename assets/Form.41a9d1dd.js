var r=Object.defineProperty,e=Object.defineProperties,n=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,l=(r,e)=>{for(var n in e||(e={}))a.call(e,n)&&s(r,n,e[n]);if(t)for(var n of t(e))i.call(e,n)&&s(r,n,e[n]);return r},o=(r,t)=>e(r,n(t));import{R as m,D as u}from"./vendor.094dd65a.js";import{F as c,B as h}from"./index.e9e276ee.js";import{P as d}from"./PageWalker.4339b74a.js";const f=({value:r,onChange:e})=>{if("string"!=typeof r||!e)throw new Error("[St Input] missing prop `value` and `onChange`");return m.createElement("input",{className:"st-input",type:"text",value:r,onChange:r=>e(r.target.value)})};var g=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:()=>{const[r]=u.exports.useState({name:"12",hair:""}),[e]=u.exports.useState({name:"",hair:""}),[n,t]=u.exports.useState(!1),a=c.useRef(),i=()=>{var r;t(!0),null==(r=a.current)||r.validate().then((r=>{alert("🎉"+JSON.stringify(r,null,4))})).catch((r=>alert(JSON.stringify(r,null,4)))).finally((()=>{t(!1)}))};return m.createElement(m.Fragment,null,m.createElement("div",{style:{maxWidth:300}},m.createElement(c,{initialValue:r,action:async r=>new Promise((e=>{setTimeout((()=>{alert(`submit${JSON.stringify(r)}`),e()}),2e3)}))},m.createElement(c.Item,{label:"User Name",name:"name",rules:[{required:!0},{type:"string",min:5}]},m.createElement(f,null)),m.createElement(c.Item,{label:"User Hair",name:"hair",rules:[{type:"string",min:5,message:"User hair must longer than 5"},{required:!0,message:"hair is rrrrrrequired"}]},m.createElement(f,null)),m.createElement(c.Item,{label:"User Hair Plus",name:"hair",rules:[{type:"string",asyncValidator:(r,e)=>new Promise(((r,n)=>{setTimeout((()=>{e.length<10?n("too short"):r(void 0)}),2e3)}))}]},(({withLabel:r,value:e,onChange:n})=>r(m.createElement(f,{value:e,onChange:n})))),m.createElement("div",null,m.createElement(c.SubmitButton,{primary:!0},"提交 Submit")," ",m.createElement(h,{type:"reset"},"重置 Reset")))),m.createElement("br",null),m.createElement("br",null),m.createElement("div",{style:{maxWidth:300}},m.createElement(c,{initialValue:e,ref:a,onSubmit:i},m.createElement(c.Item,{label:"User Name",name:"name",rules:[{required:!0},{type:"string",min:5}]},m.createElement(f,null)),m.createElement(c.Item,{label:"User Hair",name:"hair",rules:[{type:"string",min:5,message:"User hair must longer than 5"},{required:!0,message:"hair is rrrrrrequired"}]},m.createElement(f,null)),m.createElement(c.Item,{label:"User Hair Plus",name:"hair",rules:[{type:"string",asyncValidator:(r,e)=>new Promise(((r,n)=>{setTimeout((()=>{e.length<10?n("too short"):r(void 0)}),2e3)}))}]},(({withLabel:r,value:e,onChange:n})=>r(m.createElement(f,{value:e,onChange:n})))),m.createElement("div",null,m.createElement(c.SubmitButton,{primary:!0},"提交 Submit")," ",m.createElement(h,{type:"reset"},"重置 Reset")))),m.createElement("br",null),m.createElement(h,{loading:n,onClick:i},"手动提交 mannually validate and submit"),m.createElement("br",null),m.createElement("br",null),m.createElement(h,{onClick:()=>{var r;return null==(r=a.current)?void 0:r.reset()}},"手动重置 mannually reset"))}});var p=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:()=>{const[r]=u.exports.useState({name:"",hair:[]}),e=c.useRef();return m.createElement(m.Fragment,null,m.createElement(c,{initialValue:r,ref:e,action:async r=>alert("🎉"+JSON.stringify(r,null,4))},m.createElement(c.Item,{label:"User Name",name:"name",rules:{required:!0}},m.createElement(f,null)),m.createElement(c.Item,{name:"hair"},(({value:r,onChange:n})=>m.createElement(m.Fragment,null,r.map(((r,e)=>m.createElement(c.Item,{key:e,label:`User Hair ${e}`,name:`hair.${e}`,rules:[{type:"string",asyncValidator:(r,e)=>new Promise(((r,n)=>{setTimeout((()=>{e.length<5?n("too short"):r()}),2e3)}))}]},m.createElement(f,null)))),m.createElement(h,{onClick:()=>{var r;return null==(r=e.current)?void 0:r.set((r=>o(l({},r),{hair:[...r.hair,Date.now().toString()]})))}},"Add"),m.createElement(h,{onClick:()=>n(r.slice(0,-1))},"Rm")))),m.createElement(c.SubmitButton,null,"提交 Submit")))}});var b=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:()=>{const[r]=u.exports.useState({user:{name:"",hair:""}}),e=c.useRef();return m.createElement(m.Fragment,null,m.createElement(c,{initialValue:r,ref:e,action:async r=>alert("🎉"+JSON.stringify(r,null,4))},m.createElement(c.Item,{name:"user"},(({value:r,onChange:e})=>m.createElement(m.Fragment,null,m.createElement("p",null,"I got ",r.name," and ",r.hair),m.createElement(c.Item,{label:"User Name",name:"user.name"},(({value:n,withLabel:t})=>t((console.log("[docs][nesting] rerendered"),m.createElement(f,{value:n,onChange:n=>e(o(l({},r),{name:n}))}))))),m.createElement(c.Item,{label:"User Hair (wrong usage)",name:"user.hair"},m.createElement(f,null))))),m.createElement(c.SubmitButton,null,"提交 Submit")))}});var v=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:()=>{const[r]=u.exports.useState({hair:"",checkHair:""}),e=c.useRef();return m.createElement(m.Fragment,null,m.createElement("div",{style:{maxWidth:300}},m.createElement(c,{initialValue:r,ref:e,action:async r=>{alert(`🎉${JSON.stringify(r,null,4)}`)}},m.createElement(c.Item,{label:"User Hair",name:"hair",rules:[{type:"string",validator:()=>{var r,n;return(null==(r=e.current)?void 0:r.value.checkHair)&&(null==(n=e.current)||n.validate(["checkHair"])),[]}}]},m.createElement(f,null)),m.createElement(c.Item,{label:"User Hair Plus",name:"checkHair",rules:[{type:"string",validator:(r,n)=>{var t;return(null==(t=e.current)?void 0:t.value.hair)!==n?["value must equal"]:[]}}]},m.createElement(f,null)),m.createElement("div",null,m.createElement(c.SubmitButton,{primary:!0},"提交 Submit")," ",m.createElement(h,{type:"reset"},"重置 Reset")))))}});var y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:()=>{const[r]=u.exports.useState({name:""}),e=c.useRef(),[n,t]=u.exports.useState([{required:!0}]);return m.createElement(m.Fragment,null,m.createElement(c,{initialValue:r,ref:e,action:[async r=>{return(n=r.name,new Promise(((r,e)=>{setTimeout((()=>{/^\d/.test(n)?e({code:666,message:"username cannot starts with number 1234567890"}):"hack"===n&&e({code:555,message:"server error"}),r(0)}),2e3)}))).then((()=>{alert("🎉 "+r.name)})).catch((async n=>{var a;666===n.code&&n.message?(null==(a=e.current)||a.setValidateStatus("name",{state:"error",message:n.message}),t([{required:!0},{validator(e,n,t){n===r.name&&t("our api seems to not like this name, please pick another"),t()}}])):alert("💢 server error")}));var n},r=>{alert("💢"+JSON.stringify(r,null,4))}]},m.createElement(c.Item,{label:"User Name",name:"name",rules:n},m.createElement(f,null)),m.createElement(c.SubmitButton,null,"提交 Submit")))}});const S=()=>{const[r,e]=u.exports.useState(!1),[n,t]=u.exports.useState(),a=u.exports.useRef(0);return m.createElement(c.Item,{name:"name",label:"name",rules:[{async asyncValidator(r,i){if(n===i)return;const s=++a.current;e(!0);try{await(l=i,new Promise(((r,e)=>setTimeout((()=>{l.startsWith("0")&&e("cannot starts with zero"),r()}),2e3)))),a.current===s&&t(i)}finally{a.current===s&&e(!1)}var l}}]},(({withLabel:e,value:t,onChange:a})=>e(m.createElement("div",{style:{borderWidth:5,borderStyle:"solid",borderColor:n===t?"lime":r?"gray":"transparent",transition:"all .3s"}},m.createElement(f,{value:t,onChange:a})))))};const F={"/src/st-assets/Form/basic.tsx":g,"/src/st-assets/Form/list.tsx":p,"/src/st-assets/Form/nesting.tsx":b,"/src/st-assets/Form/pass.tsx":v,"/src/st-assets/Form/remote.tsx":y,"/src/st-assets/Form/status.tsx":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:()=>{const[r]=u.exports.useState({name:"",hair:""}),e=c.useRef();return m.createElement(m.Fragment,null,m.createElement(c,{initialValue:r,ref:e,action:async r=>alert("🎉"+JSON.stringify(r,null,4))},m.createElement(S,null),m.createElement(c.SubmitButton,null,"提交 Submit")))}})},I={basic:"import React, { useState } from 'react';\r\nimport { Form, Button, Input } from 'starfall';\r\nconst BasicUsage: React.FC = () => {\r\n  const [initialValue] = useState({\r\n    name: '12',\r\n    hair: '',\r\n  });\r\n  const [initialValue2] = useState({\r\n    name: '',\r\n    hair: '',\r\n  });\r\n\r\n  const [isValidating, setIsValidating] = useState(false);\r\n  const formRef = Form.useRef<{\r\n    name: string;\r\n    hair: string;\r\n  }>();\r\n\r\n  const mannuallySubmit = () => {\r\n    setIsValidating(true);\r\n    formRef.current\r\n      ?.validate()\r\n      .then(value => {\r\n        alert('🎉' + JSON.stringify(value, null, 4));\r\n      })\r\n      .catch(e => alert(JSON.stringify(e, null, 4)))\r\n      .finally(() => {\r\n        setIsValidating(false);\r\n      });\r\n  };\r\n\r\n  return (\r\n    <>\r\n      <div style={{ maxWidth: 300 }}>\r\n        <Form<{\r\n          name: string;\r\n          hair: string;\r\n        }>\r\n          initialValue={initialValue}\r\n          action={async value =>\r\n            new Promise(resolve => {\r\n              setTimeout(() => {\r\n                alert(`submit${JSON.stringify(value)}`);\r\n                resolve();\r\n              }, 2000);\r\n            })\r\n          }\r\n        >\r\n          <Form.Item\r\n            label=\"User Name\"\r\n            name=\"name\"\r\n            rules={[\r\n              { required: true },\r\n              {\r\n                type: 'string',\r\n                min: 5,\r\n              },\r\n            ]}\r\n          >\r\n            <Input />\r\n          </Form.Item>\r\n          <Form.Item\r\n            label=\"User Hair\"\r\n            name=\"hair\"\r\n            rules={[\r\n              { type: 'string', min: 5, message: 'User hair must longer than 5' },\r\n              { required: true, message: 'hair is rrrrrrequired' },\r\n            ]}\r\n          >\r\n            <Input />\r\n          </Form.Item>\r\n          <Form.Item\r\n            label=\"User Hair Plus\"\r\n            name=\"hair\"\r\n            rules={[\r\n              {\r\n                type: 'string',\r\n                asyncValidator: (rules, value) => {\r\n                  return new Promise((resolve, reject) => {\r\n                    setTimeout(() => {\r\n                      if (value.length < 10) {\r\n                        reject('too short');\r\n                      } else {\r\n                        resolve(undefined);\r\n                      }\r\n                    }, 2000);\r\n                  });\r\n                },\r\n              },\r\n            ]}\r\n          >\r\n            {({ withLabel, value, onChange }) =>\r\n              withLabel(<Input value={value} onChange={onChange} />)\r\n            }\r\n          </Form.Item>\r\n          <div>\r\n            <Form.SubmitButton primary>提交 Submit</Form.SubmitButton>\r\n            &nbsp;\r\n            <Button type=\"reset\">重置 Reset</Button>\r\n          </div>\r\n        </Form>\r\n      </div>\r\n      <br />\r\n      <br />\r\n      <div style={{ maxWidth: 300 }}>\r\n        <Form<{\r\n          name: string;\r\n          hair: string;\r\n        }>\r\n          initialValue={initialValue2}\r\n          ref={formRef}\r\n          onSubmit={mannuallySubmit}\r\n        >\r\n          <Form.Item\r\n            label=\"User Name\"\r\n            name=\"name\"\r\n            rules={[\r\n              { required: true },\r\n              {\r\n                type: 'string',\r\n                min: 5,\r\n              },\r\n            ]}\r\n          >\r\n            <Input />\r\n          </Form.Item>\r\n          <Form.Item\r\n            label=\"User Hair\"\r\n            name=\"hair\"\r\n            rules={[\r\n              { type: 'string', min: 5, message: 'User hair must longer than 5' },\r\n              { required: true, message: 'hair is rrrrrrequired' },\r\n            ]}\r\n          >\r\n            <Input />\r\n          </Form.Item>\r\n          <Form.Item\r\n            label=\"User Hair Plus\"\r\n            name=\"hair\"\r\n            rules={[\r\n              {\r\n                type: 'string',\r\n                asyncValidator: (rules, value) => {\r\n                  return new Promise((resolve, reject) => {\r\n                    setTimeout(() => {\r\n                      if (value.length < 10) {\r\n                        reject('too short');\r\n                      } else {\r\n                        resolve(undefined);\r\n                      }\r\n                    }, 2000);\r\n                  });\r\n                },\r\n              },\r\n            ]}\r\n          >\r\n            {({ withLabel, value, onChange }) =>\r\n              withLabel(<Input value={value} onChange={onChange} />)\r\n            }\r\n          </Form.Item>\r\n          <div>\r\n            <Form.SubmitButton primary>提交 Submit</Form.SubmitButton>\r\n            &nbsp;\r\n            <Button type=\"reset\">重置 Reset</Button>\r\n          </div>\r\n        </Form>\r\n      </div>\r\n      <br />\r\n      <Button loading={isValidating} onClick={mannuallySubmit}>\r\n        手动提交 mannually validate and submit\r\n      </Button>\r\n      <br />\r\n      <br />\r\n      <Button onClick={() => formRef.current?.reset()}>手动重置 mannually reset</Button>\r\n    </>\r\n  );\r\n};\r\nexport default BasicUsage;\r\n",list:"import React, { useState } from 'react';\r\nimport { Button, Form, Input } from 'starfall';\r\n\r\nconst List: React.FC = () => {\r\n  const [initialValue] = useState({\r\n    name: '',\r\n    hair: [],\r\n  });\r\n\r\n  const formRef = Form.useRef<{\r\n    name: string;\r\n    hair: string[];\r\n  }>();\r\n\r\n  return (\r\n    <>\r\n      <Form<{\r\n        name: string;\r\n        hair: string[];\r\n      }>\r\n        initialValue={initialValue}\r\n        ref={formRef}\r\n        action={async v => alert('🎉' + JSON.stringify(v, null, 4))}\r\n      >\r\n        <Form.Item label=\"User Name\" name=\"name\" rules={{ required: true }}>\r\n          <Input />\r\n        </Form.Item>\r\n        <Form.Item<string[]> name=\"hair\">\r\n          {({ value, onChange }) => {\r\n            return (\r\n              <>\r\n                {value.map((_, index) => {\r\n                  return (\r\n                    <Form.Item\r\n                      key={index}\r\n                      label={`User Hair ${index}`}\r\n                      name={`hair.${index}`}\r\n                      rules={[\r\n                        {\r\n                          type: 'string',\r\n                          asyncValidator: (rule, value) => {\r\n                            return new Promise((resolve, reject) => {\r\n                              setTimeout(() => {\r\n                                if (value.length < 5) {\r\n                                  reject('too short');\r\n                                } else {\r\n                                  resolve();\r\n                                }\r\n                              }, 2000);\r\n                            });\r\n                          },\r\n                        },\r\n                      ]}\r\n                    >\r\n                      <Input />\r\n                    </Form.Item>\r\n                  );\r\n                })}\r\n                <Button\r\n                  onClick={() =>\r\n                    formRef.current?.set(v => ({\r\n                      ...v,\r\n                      hair: [...v.hair, Date.now().toString()],\r\n                    }))\r\n                  }\r\n                >\r\n                  Add\r\n                </Button>\r\n                <Button onClick={() => onChange(value.slice(0, -1))}>Rm</Button>\r\n              </>\r\n            );\r\n          }}\r\n        </Form.Item>\r\n        <Form.SubmitButton>提交 Submit</Form.SubmitButton>\r\n      </Form>\r\n    </>\r\n  );\r\n};\r\nexport default List;\r\n",nesting:"import React, { useState } from 'react';\r\nimport { Form, Input } from 'starfall';\r\n\r\nconst List: React.FC = () => {\r\n  const [initialValue] = useState({\r\n    user: {\r\n      name: '',\r\n      hair: '',\r\n    },\r\n  });\r\n\r\n  const formRef = Form.useRef<{\r\n    user: {\r\n      name: string;\r\n      hair: string;\r\n    };\r\n  }>();\r\n\r\n  return (\r\n    <>\r\n      <Form<{\r\n        user: {\r\n          name: string;\r\n          hair: string;\r\n        };\r\n      }>\r\n        initialValue={initialValue}\r\n        ref={formRef}\r\n        action={async v => alert('🎉' + JSON.stringify(v, null, 4))}\r\n      >\r\n        <Form.Item<{\r\n          name: string;\r\n          hair: string[];\r\n        }> name=\"user\">\r\n          {({ value: user, onChange }) => {\r\n            return (\r\n              <>\r\n                <p>\r\n                  I got {user.name} and {user.hair}\r\n                </p>\r\n                <Form.Item label=\"User Name\" name=\"user.name\">\r\n                  {({ value, withLabel }) =>\r\n                    withLabel(\r\n                      (console.log('[docs][nesting] rerendered'),\r\n                      (\r\n                        <Input\r\n                          value={value}\r\n                          onChange={name =>\r\n                            onChange({\r\n                              ...user,\r\n                              name,\r\n                            })\r\n                          }\r\n                        />\r\n                      ))\r\n                    )\r\n                  }\r\n                </Form.Item>\r\n                <Form.Item label=\"User Hair (wrong usage)\" name=\"user.hair\">\r\n                  <Input />\r\n                </Form.Item>\r\n              </>\r\n            );\r\n          }}\r\n        </Form.Item>\r\n        <Form.SubmitButton>提交 Submit</Form.SubmitButton>\r\n      </Form>\r\n    </>\r\n  );\r\n};\r\nexport default List;\r\n",pass:"import React, { useState } from 'react';\r\nimport { Form, Button, Input } from 'starfall';\r\n\r\nconst Pass: React.FC = () => {\r\n  const [initialValue] = useState({\r\n    hair: '',\r\n    checkHair: '',\r\n  });\r\n\r\n  const formRef = Form.useRef<{\r\n    hair: string;\r\n    checkHair: string;\r\n  }>();\r\n\r\n  return (\r\n    <>\r\n      <div style={{ maxWidth: 300 }}>\r\n        <Form<{ hair: string; checkHair: string }>\r\n          initialValue={initialValue}\r\n          ref={formRef}\r\n          action={async value => {\r\n            alert(`🎉${JSON.stringify(value, null, 4)}`);\r\n          }}\r\n        >\r\n          <Form.Item\r\n            label=\"User Hair\"\r\n            name=\"hair\"\r\n            rules={[\r\n              {\r\n                type: 'string',\r\n                validator: () => {\r\n                  formRef.current?.value.checkHair && formRef.current?.validate(['checkHair']);\r\n                  return [];\r\n                },\r\n              },\r\n            ]}\r\n          >\r\n            <Input />\r\n          </Form.Item>\r\n          <Form.Item\r\n            label=\"User Hair Plus\"\r\n            name=\"checkHair\"\r\n            rules={[\r\n              {\r\n                type: 'string',\r\n                validator: (rules, value) => {\r\n                  if (formRef.current?.value.hair !== value) {\r\n                    return ['value must equal'];\r\n                  }\r\n                  return [];\r\n                },\r\n              },\r\n            ]}\r\n          >\r\n            <Input />\r\n          </Form.Item>\r\n          <div>\r\n            <Form.SubmitButton primary>提交 Submit</Form.SubmitButton>\r\n            &nbsp;\r\n            <Button type=\"reset\">重置 Reset</Button>\r\n          </div>\r\n        </Form>\r\n      </div>\r\n    </>\r\n  );\r\n};\r\nexport default Pass;\r\n",remote:"import React, { useState } from 'react';\r\nimport { Form, Input } from 'starfall';\r\nimport { RuleItem } from 'async-validator';\r\n\r\nconst apiUser = (s: string) => {\r\n  return new Promise((resolve, reject) => {\r\n    setTimeout(() => {\r\n      if (/^\\d/.test(s)) {\r\n        reject({\r\n          code: 666,\r\n          message: 'username cannot starts with number 1234567890',\r\n        });\r\n      } else if (s === 'hack') {\r\n        reject({\r\n          code: 555,\r\n          message: 'server error',\r\n        });\r\n      }\r\n      resolve(0);\r\n    }, 2000);\r\n  });\r\n};\r\n\r\nconst BasicUsage: React.FC = () => {\r\n  const [initialValue] = useState({\r\n    name: '',\r\n  });\r\n\r\n  const formRef = Form.useRef();\r\n\r\n  const [nameRule, setNameRule] = useState<RuleItem[]>([{ required: true }]);\r\n  return (\r\n    <>\r\n      <Form<{\r\n        name: string;\r\n      }>\r\n        initialValue={initialValue}\r\n        ref={formRef}\r\n        action={[\r\n          async v =>\r\n            apiUser(v.name)\r\n              .then(() => {\r\n                alert('🎉 ' + v.name);\r\n              })\r\n              .catch(async e => {\r\n                if (e.code === 666 && e.message) {\r\n                  formRef.current?.setValidateStatus('name', {\r\n                    state: 'error',\r\n                    message: e.message,\r\n                  });\r\n                  setNameRule([\r\n                    { required: true },\r\n                    {\r\n                      validator(r, value, callback) {\r\n                        if (value === v.name) {\r\n                          callback('our api seems to not like this name, please pick another');\r\n                        }\r\n                        callback();\r\n                      },\r\n                    },\r\n                  ]);\r\n                } else {\r\n                  alert('💢 server error');\r\n                }\r\n              }),\r\n          errors => {\r\n            alert('💢' + JSON.stringify(errors, null, 4));\r\n          },\r\n        ]}\r\n      >\r\n        <Form.Item label=\"User Name\" name=\"name\" rules={nameRule}>\r\n          <Input />\r\n        </Form.Item>\r\n        <Form.SubmitButton>提交 Submit</Form.SubmitButton>\r\n      </Form>\r\n    </>\r\n  );\r\n};\r\nexport default BasicUsage;\r\n",status:"import React, { useEffect, useRef, useState } from 'react';\r\nimport { Form, Input } from 'starfall';\r\n\r\nconst api = (s: string): Promise<void> =>\r\n  new Promise((resolve, reject) =>\r\n    setTimeout(() => {\r\n      if (s.startsWith('0')) {\r\n        reject('cannot starts with zero');\r\n      }\r\n      resolve();\r\n    }, 2000)\r\n  );\r\n\r\nconst MyFormItem: React.FC = () => {\r\n  const [validating, setValidating] = useState(false);\r\n  const [validateSuccess, setValidateSuccess] = useState<string | undefined>();\r\n  const key = useRef(0);\r\n\r\n  return (\r\n    <Form.Item<string>\r\n      name=\"name\"\r\n      label=\"name\"\r\n      rules={[\r\n        {\r\n          async asyncValidator(rule, value) {\r\n            if (validateSuccess === value) {\r\n              return;\r\n            }\r\n\r\n            const k = ++key.current;\r\n            setValidating(true);\r\n            try {\r\n              await api(value);\r\n              if (key.current === k) {\r\n                setValidateSuccess(value);\r\n              }\r\n            } finally {\r\n              if (key.current === k) {\r\n                setValidating(false);\r\n              }\r\n            }\r\n\r\n            return;\r\n          },\r\n        },\r\n      ]}\r\n    >\r\n      {({ withLabel, value, onChange }) => {\r\n        return withLabel(\r\n          <div\r\n            style={{\r\n              borderWidth: 5,\r\n              borderStyle: 'solid',\r\n              borderColor: validateSuccess === value ? 'lime' : validating ? 'gray' : 'transparent',\r\n              transition: 'all .3s',\r\n            }}\r\n          >\r\n            <Input value={value} onChange={onChange} />\r\n          </div>\r\n        );\r\n      }}\r\n    </Form.Item>\r\n  );\r\n};\r\n\r\nconst WithStatus: React.FC = () => {\r\n  const [initialValue] = useState({\r\n    name: '',\r\n    hair: '',\r\n  });\r\n\r\n  const formRef = Form.useRef<{\r\n    name: '';\r\n    hair: '';\r\n  }>();\r\n\r\n  return (\r\n    <>\r\n      <Form<{\r\n        name: string;\r\n        hair: string;\r\n      }>\r\n        initialValue={initialValue}\r\n        ref={formRef}\r\n        action={async v => alert('🎉' + JSON.stringify(v, null, 4))}\r\n      >\r\n        <MyFormItem />\r\n        <Form.SubmitButton>提交 Submit</Form.SubmitButton>\r\n      </Form>\r\n    </>\r\n  );\r\n};\r\nexport default WithStatus;\r\n"},E={zh:'## Form 表单\r\n\r\n:::demo{basic}\r\n\r\n### 基本用法\r\n\r\n`Form.Item`会接管子元素`value`和`onChange`属性，且 onChange 的第一参数是值而不是事件。同时也支持传入`render props`作子元素。\r\n\r\n`Form.Item`**仅主动输入时会自动触发校验**。**节流规则是连续输入时每次异步校验需等待上一次完成，在不提交仅输入的情况下同时只有一个异步校验在调用**。\r\n\r\n第一个表单传入`action`，自动校验自动提交，自动校验里面的 submit 按钮会自动切换到加载状态。\r\n\r\n第二个表单传入`onSubmit`，需要在外面主动校验主动为按钮切换加载状态。如果不在外面做节流就会像示例这样打两次回车提交两次。\r\n\r\n这两个参数互斥\r\n\r\n:::\r\n\r\n:::demo{pass}\r\n\r\n### 重复密码\r\n\r\n表单项间通信，如果不是`element`有这个示例，差点就去挖坑显式监听接口了。\r\n\r\n:::\r\n\r\n:::demo{remote}\r\n\r\n### 修改规则\r\n\r\n这个示例里不接收以数字开头的名字，当不接收此参数时，调用`setValidateStatus`将名称置错，并且改变`rules`，再次输入同样的名字也会警告。\r\n\r\n:::\r\n\r\n:::demo{list}\r\n\r\n### 列表\r\n\r\n嵌套加循环\r\n\r\n:::\r\n\r\n:::demo{nesting}\r\n\r\n### 假的监听\r\n\r\n列表一节已经展示了嵌套，嵌套比起其它表单库的做法即主动用 ref 监听值更加容易，模型也更加简单。\r\n\r\n以下讲优化：\r\n\r\n常规情况下，你会想，这里有大小两个订阅，所以嵌套是会导致局部多次渲染的，大 Item 一次（外层的 Item），小 Item 一次（内层的 Item），导致渲染两次。就好比`react-redux hooks`一节提到的 [performance](https://github.com/reduxjs/react-redux/blame/master/docs/api/hooks.md#L410) 问题。这里`st-form`在小 Item 里触发的是大 Item 的 `onChange`，大 Item 的 `onChange` 只会更新大 Item，因为小 Item 的 `path` 比大 Item 深一层，小 Item 知道自己会‘被’刷新，所以拒绝主动刷新了。\r\n\r\n由于嵌套必须使用 render props 写，大 Item 的刷新自动带动了创建一个新的小 Item，于是小 Item 也是新的了。\r\n\r\n表单接管逻辑的同时也接管渲染结果，且字段都有一一对应的输入组件，使用这种嵌套策略合适。\r\n\r\n:::\r\n\r\n:::demo{status}\r\n\r\n### 校验状态\r\n\r\n`Form`之前是带有状态的，但是无缘无故去刷新状态就会渲染 3 次，多出来的两次是正在校验和校验成功状态。\r\n可是实际用异步校验`asyncValidator`的场景还是太少了，都是同步校验的。\r\n\r\n移除了多余重复渲染后，现在的校验状态只有没错误和错误两种，自然需要以更多的外部逻辑弥补。\r\n\r\n:::\r\n\r\n### 接口索引\r\n\r\n| Form Property         | Description                                                      | Type                                                                                 |\r\n| --------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ |\r\n| initialValue:required | 初始值，只认首次渲染传进去的那个                                 | `Record<string, unknown>`                                                            |\r\n| action                | 表单验证成功后调用的方法                                         | `(value: T) => Promise<void> / void`                                                 |\r\n| action                | 也能传数组，第一个是 action，第二个是校验失败时执行              | ` [(value: T) => Promise<void> / void, (errors: ErrorList) => Promise<void> / void]` |\r\n| onSubmit              | 监听表单的提交，此时需要手动校验和提交和禁用按钮，和`action`互斥 | `(value: T) => void`                                                                 |\r\n\r\n| Form Instance     | Description                    | Type                                                          |\r\n| ----------------- | ------------------------------ | ------------------------------------------------------------- |\r\n| setInitialValue   | 只能通过此种方式设置表单初始值 | `(initialValue?: T) => void`                                  |\r\n| validate          | 抢占地触发表单（项）的验证     | `(names?: string[]) => Promise<T>`                            |\r\n| reset             | 清空表单（项）的验证状态及数据 | `(names?: string[]) => void`                                  |\r\n| set               | 设置表单的值                   | `(callback: (value: T) => T) => void`                         |\r\n| value (getter)    | 获得表单的值                   | `T`                                                           |\r\n| setValidateStatus | 设置某表单项的验证状态         | `(name: string, validateStatus: ValidateStatusParam) => void` |\r\n\r\n| Form.Item Property | Description                                             | Type                    |\r\n| ------------------ | ------------------------------------------------------- | ----------------------- |\r\n| name:required      |                                                         | `string`                |\r\n| label              |                                                         | `string`                |\r\n| rules              | 查阅`async-validator`，可变，但当规则改变时不会自动校验 | `RuleItem`/`RuleItem[]` |\r\n\r\n### 原理\r\n\r\n确实有人快一步分析市面上的表单，[React 表单源码阅读笔记 👍](https://zhuanlan.zhihu.com/p/352181528)。\r\n\r\n`material-ui` 和 `chakra-ui` `semantic-ui` `react-bootstrap`等大部分不具备表单验证功能，可选的验证工具是 [`formik`](https://github.com/formium/formik)， formik 使用 [`Yup`](https://formik.org/docs/tutorial#schema-validation-with-yup) 做 Schema 验证。\r\n\r\n`antd` 即 `rc-field-form` 和 `element/element-plus` 使用[`async-validator`](https://github.com/yiminghe/async-validator) 做 Schema 验证。\r\n\r\n`antd` 和 `formik` 倾向使用非受控模式，即表单状态不放外边，这样的好处一个是输入时只有表单内部在重渲染。\r\n\r\n假如表单的值放外面，每次输入(即`setState`)都会引起持有该状态的组件（很可能是页面）的整体刷新。很多业务倾向于外部要访问到表单的值。比如用户输入了 a 就显示 b 输入框，这个在非受控模式是做不到的，因为外面获取不到表单里的状态。\r\n\r\n- `antd` 默认局部刷新，因为每次更新会触发所有[Field 的回调](https://github.com/react-component/field-form/blob/e118381c2102b36c4ffe7e17a6415df091e772b7/src/Field.tsx#L216)让其各自比对新旧值判断是否需要更新，在使用[render props 模式](https://github.com/react-component/field-form/blob/e118381c2102b36c4ffe7e17a6415df091e772b7/docs/examples/renderProps.tsx#L17)此功能失效，表单整体刷新，所以文档里提示这个性能更差。\r\n- `formik` 默认整体刷新表单，额外的优化手段是 FastField 组件，该组件有 shouldComponentUpdate 方法各自比对新旧值，能够判断是否需要更新。\r\n\r\n[只要 vue 够快就不用优化](https://www.zhihu.com/question/453332049/answer/1844784032)。\r\n\r\n表单核心和写折叠面板一样用传统的订阅模式就能解决。\r\n\r\n`muse-ui`的源码比较精简，推荐入门阅读，然后是`element/element-plus`。\r\n\r\n`starfall` 尝试过使用受控表单，感觉不合群，当遇到性能差的情况时在受控模式是没有解决办法避免的。还是希望它能适合任何场景。经过了大的重改，现在就是非受控了。所以`st-form`是高性能的。\r\n\r\n### Accessbility\r\n\r\n- 依据表单规范，支持隐式提交\r\n\r\n> 太长不看: **添加 submit 按钮即可支持隐式提交表单,即支持回车键提交**\r\n>\r\n> 4.10.21.2 Implicit submission\r\n> A form element\'s default button is the first submit button in tree order whose form owner is that form element.\r\n>\r\n> If the user agent supports letting the user submit a form implicitly (for example, on some platforms hitting the "enter" key while a text control is focused implicitly submits the form), then doing so for a form, whose default button has activation behavior and is not disabled, must cause the user agent to fire a click event at that default button.\r\n>\r\n> There are pages on the web that are only usable if there is a way to implicitly submit forms, so user agents are strongly encouraged to support this.\r\n>\r\n> If the form has no submit button, then the implicit submission mechanism must do nothing if the form has more than one field that blocks implicit submission, and must submit the form element from the form element itself otherwise.\r\n>\r\n> For the purpose of the previous paragraph, an element is a field that blocks implicit submission of a form element if it is an input element whose form owner is that form element and whose type attribute is in one of the following states: Text, Search, URL, Telephone, Email, Password, Date, Month, Week, Time, Local Date and Time, Number\r\n>\r\n> [HTML Spec form-control-infrastructure.implicit-submission](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#implicit-submission)\r\n>\r\n> [The Enter Key should Submit Forms, Stop Suppressing it](https://www.tjvantoll.com/2013/01/01/enter-should-submit-forms-stop-messing-with-that/)\r\n\r\n> W3C 标准中有如下规定：\r\n>\r\n> When there is only one single-line text input field in a form, the user agent should accept Enter in that field as a request to submit the form.\r\n>\r\n> 即：当一个 form 元素中只有一个输入框时，在该输入框中按下回车应提交该表单。如果希望阻止这一默认行为，可以在 <el-form> 标签上添加 @submit.native.prevent。\r\n>\r\n> https://element-plus.org/#/zh-CN/component/form\r\n',en:"## Form\r\n"};export default()=>m.createElement(d,{requireDemo:F,requireRaw:I,requireMd:E});