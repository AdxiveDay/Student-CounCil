<script>
    import { onMount } from "svelte";

    let Name = $state("");
    let Position = $state("");
    let Class = $state("");
    let num = $state();
    let Profile = $state("");

    let DeleteNum = $state();

    onMount(() => {
        const stored = localStorage.getItem("detail");
        if (stored) {
            Detail = JSON.parse(stored);
        }
    });

    const PushArray = () => {
        Detail.push({
            Pic: Profile,
            Number: num,
            name: Name,
            position: Position,
            class: Class,
            point: 100,
        });

        alert("Added!");
        localStorage.setItem("detail", JSON.stringify(Detail));
    };

    const DeleteID = () => {
        const index = Detail.findIndex(item => parseInt(item.Number) === parseInt(DeleteNum));

        if (index !== -1) {
            Detail.splice(index, 1)
            alert("Deleted")
        } else {
            alert("Number Do Not Exist")
        }

        localStorage.setItem("detail", JSON.stringify(Detail));
    };

    let Detail = $state([]);
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

<div class="flex justify-center flex-col items-center h-screen m-[3rem]">

<!-- create -->

<div class="bg-blue-400 flex flex-col rounded-2xl items-center p-[1.5rem] w-fit">
<h1 Class="font-medium text-3xl text-white m-[1rem]">CreateID</h1>
<input
    type="text"
    placeholder="Picture Link"
    bind:value={Profile}
    class="bg-white p-[0.5rem] rounded-md"
/>
<input
    type="text"
    placeholder="Number"
    bind:value={num}
    class="bg-white p-[0.5rem] m-[1rem] rounded-md"
/>
<input
    type="text"
    placeholder="name"
    bind:value={Name}
    class="bg-white p-[0.5rem] rounded-md"
/>
<input
    type="text"
    placeholder="Position"
    bind:value={Position}
    class="bg-white p-[0.5rem] m-[1rem] rounded-md"
/>
<input
    type="text"
    placeholder="Class"
    bind:value={Class}
    class="bg-white p-[0.5rem] mb-[1rem] rounded-md"
/>
<button class="bg-white p-[0.5rem] rounded-md" onclick={PushArray}>Add</button>
</div>


<!-- delete -->
<div class="bg-red-400 flex flex-col rounded-2xl items-center p-[1.5rem] mt-[2rem] w-fit">
<h1 class="text-white font-md text-4xl">Delete ID</h1>
<input
    type="number"
    placeholder="ID"
    bind:value={DeleteNum}
    class="bg-white p-[0.5rem] m-[1rem] rounded-md"
/>

<button onclick={DeleteID} class="bg-white p-[0.5rem] rounded-md">ยืนยัน</button>
</div>
</div>