<script>
    import { onMount } from "svelte";

    let Num = $state();
    let PointChange = $state();
    let Detail = [];

    onMount(() => {
        const stored = localStorage.getItem("detail");
        if (stored) {
            Detail = JSON.parse(stored);
        }
    });

    const Pointdelete = () => {
        let found = false;
        Detail = Detail.map((item) => {
            if (item.Number == parseInt(Num)) {
                found = true;
                alert("ลบคะแนนเรียบร้อย");
                return {
                    ...item,
                    point: item.point - PointChange,
                };
            }
            return item;
        });

        if (found) {
            localStorage.setItem("detail", JSON.stringify(Detail));
        } else {
            alert("ไม่พบผู้ใช้ที่มี ID นี้");
        }
    };

    const AddedPoint = () => {
        let found = false;
        Detail = Detail.map((item) => {
            if (item.Number == parseInt(Num)) {
                found = true;
                alert("เพิ่มคะแนนเรียบร้อย");
                return {
                    ...item,
                    point: item.point + PointChange,
                };
            }
            return item;
        });

        if (found) {
            localStorage.setItem("detail", JSON.stringify(Detail));
        } else {
            alert("ไม่พบผู้ใช้ที่มี ID นี้");
        }
    };
</script>

<nav class="flex m-[3rem] items-center justify-between">
    <ul>
        <h1 class="font-bold text-2xl w-[50px] text-blue-400">
            Student Council
        </h1>
    </ul>
    <ul class="flex">
        <li class="mr-[1rem]">
            <a class="text-white" href="/">Point</a>
        </li>
    </ul>
</nav>

<div class="flex flex-col items-center mt-[8rem]">
    <h1 class="text-green-400 text-4xl font-medium mb-[3rem]">AddPoint</h1>
    <input
        type="number"
        class="bg-white mb-2 p-2 rounded"
        placeholder="ID"
        bind:value={Num}
    />
    <input
        type="number"
        class="bg-white mb-[1.5rem] p-2 rounded"
        placeholder="Point"
        bind:value={PointChange}
    />
    <button
        class="bg-green-400 p-[0.5rem] px-[2rem] cursor-pointer rounded-md"
        onclick={AddedPoint}>ยืนยัน</button
    >

    <h1 class="text-red-400 text-4xl font-medium mt-[4.5rem] mb-[3rem]">DecreasePoint</h1>
    <input
        type="number"
        class="bg-white mb-2 p-2 rounded"
        placeholder="ID"
        bind:value={Num}
    />
    <input
        type="number"
        class="bg-white mb-[1.5rem] p-2 rounded"
        placeholder="Point"
        bind:value={PointChange}
    />
    <button
        class="bg-red-400 p-[0.5rem] px-[2rem] cursor-pointer rounded-md"
        onclick={Pointdelete}>ยืนยัน</button
    >
</div>
