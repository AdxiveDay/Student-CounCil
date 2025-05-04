<script>
    import { onMount } from "svelte";

    let Detail = $state([
        
    ]);

    onMount(() => {
        const stored = localStorage.getItem("detail");
        if (stored) {
            Detail = JSON.parse(stored);
        }
    });
</script>

<nav class="flex m-[3rem] items-center justify-between">
    <ul>
        <h1 class="font-bold text-2xl w-[50px] text-blue-400">Student Council</h1>
    </ul>
    <ul class="flex">
        <li class="mr-[1rem]">
            <a class="text-white" href="/">Point</a>
        </li>
    </ul>
</nav>

<div class="flex flex-col items-center">
    {#if Detail.length === 0}
        <p class="text-red-500 mt-20">ไม่มีข้อมูล</p>
    {/if}

    {#each Detail as item}
        <div class="w-[270px] h-[80px] items-center pl-[1rem] mt-[1rem] relative flex bg-[#1B1F2E] rounded-2xl">
            <img
                class="w-[50px] h-[50px] rounded-2xl"
                src={item.Pic}
                alt=""
            />
            <div class="absolute left-[80px]">
                <h1 class="text-white font-medium text-[0.8rem]">{item.name}</h1>
                <h3 class="text-white text-[0.6rem] font-light">{item.position}</h3>
                <p class="text-white text-[0.6rem] font-light">{item.class}</p>
            </div>
            <div class="absolute left-[178px]">
            {#if item.point <= 50}
                <h1 class="text-red-600 font-medium text-3xl ml-[1.5rem]">
                    {item.point}
                </h1>
            {:else}
                <h1 class="text-white font-medium text-3xl ml-[1.5rem]">
                    {item.point}
                </h1>
            {/if}
            </div>
        </div>
    {/each}
</div>
