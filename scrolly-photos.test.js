import { test, expect } from '@playwright/test';

test(`it's alive!`, async({ page }) => {
    await page.goto('/')
    const name = await page.getByRole('heading').textContent();
    expect(name).toBe('scrolly-photos');
});

test(`it creates one shadow DOM <div.photo> for each <img> provided`, async({ page }) => {
    await page.goto('/')
    const counts = await page.evaluate(() => {
        const imgs = document.querySelectorAll('scrolly-photos img')
        const divs = document.querySelector('scrolly-photos').shadowRoot.querySelectorAll('div.photo')

        return {
            imgs: imgs.length,
            divs: divs.length
        }
    })

    expect(counts.img).toBe(counts.div);
});

test(`a shadow DOM <div.photo> is the same height as the window`, async({ page }) => {
    await page.goto('/')
    const sameAsWindowHeight = await page.evaluate(() => {
        const first = document.querySelector('scrolly-photos').shadowRoot.querySelector('div.photo')
        const firstHeight = first.getBoundingClientRect().height
        const windowHeight = window.innerHeight
        return firstHeight === windowHeight
    })

    expect(sameAsWindowHeight).toBe(true);
});

test(`the photos scroll left as reader scrolls down`, async({ page }) => {
    await page.goto('/')
    await page.waitForLoadState()
    await page.mouse.wheel(0, 1300)
    await page.waitForTimeout(500)

    const translateXPropertyValue = await page.evaluate(() => {
        const shadowRoot = document.querySelector('scrolly-photos').shadowRoot
        const photos = shadowRoot.querySelector('.photos')
        const style = getComputedStyle(photos)
        const translateX = style.getPropertyValue('--translate-x')
        return translateX
    })

    expect(translateXPropertyValue).toContain('-');
    expect(translateXPropertyValue).toContain('vw');
});