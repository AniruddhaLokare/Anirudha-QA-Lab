// Keep browser title and metadata aligned with editable profile information.
(()=>{const p=window.PORTFOLIO_DATA?.profile;if(!p)return;
 document.title=`${p.name} | ${p.role}`;
 document.querySelector('meta[name="description"]')?.setAttribute('content',`${p.name} — ${p.role}. ${p.intro}`);
})();
