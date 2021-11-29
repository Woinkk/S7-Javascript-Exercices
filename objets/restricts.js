function restrict(target, keep) {
    let obj = {};
    for (const item in keep) if (target[item] !== undefined) obj[item] = target[item];
    return obj;
}

const config = { user: "user", pass: "pass" };
const tooMuchConfig = { vars: "LOG=info", user: "user", pass: "pass", env: "prod" };
"vars" in tooMuchConfig; // => true
"env" in tooMuchConfig; // => true

const properConfig = restrict(tooMuchConfig, config);
console.log(properConfig);
properConfig === config; // => false
"vars" in properConfig; // => false
"env" in properConfig; // => false