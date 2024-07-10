InURL = new URL(location.href);
Slug = InURL.searchParams.get('slug');
TargetURL = 'https://l.j-ing.me/'+Slug;
setTimeout(function(){location.replace(TargetURL)},3000)