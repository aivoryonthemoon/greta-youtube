import { test, expect } from '@playwright/test';
const telegram='https://t.me/+do8kQuhcsBUzNTc8';
test('Telegram works, no overflow, video filters and modal restore focus',async({page},testInfo)=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('/');
 await expect(page.locator('#telegram-main')).toHaveAttribute('href',telegram);
 await expect(page.locator('#telegram-main')).toBeVisible();
 await expect(page.locator('.cta-island').first()).toBeVisible();
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBeTruthy();
 await page.getByRole('button',{name:'Bali',exact:true}).click();
 await expect(page.locator('.film-card:visible')).toHaveCount(1);
 await page.getByRole('button',{name:'Tutti',exact:true}).click();
 await expect(page.locator('.film-card:visible')).toHaveCount(3);
 const trigger=page.locator('[data-video]').first();await trigger.click();
 await expect(page.locator('#cinema')).toBeVisible();
 await expect(page.locator('#player iframe')).toHaveAttribute('src',/youtube-nocookie.com\/embed\/a9SzGjrahuk/);
 await page.getByRole('button',{name:'Chiudi il video'}).click();
 await expect(page.locator('#player iframe')).toHaveCount(0);await expect(trigger).toBeFocused();
 if(testInfo.project.name!=='desktop'){
  await page.locator('footer').scrollIntoViewIfNeeded();
  await expect(page.locator('.telegram-sticky')).toBeVisible();
  await expect(page.locator('.telegram-sticky a')).toHaveAttribute('href',telegram);
 }
 expect(errors).toEqual([]);
});
test('reduced motion disables 3D and retains content',async({page})=>{
 await page.emulateMedia({reducedMotion:'reduce'});await page.goto('/');
 await page.locator('.intro').scrollIntoViewIfNeeded();
 await expect(page.locator('.intro h2')).toBeVisible();
 await expect(page.locator('.scene-island canvas')).toHaveCount(0);
});
