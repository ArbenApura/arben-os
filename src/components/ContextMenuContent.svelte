<script lang="ts">
	// IMPORTED COMPONENTS
	import { ContextMenu } from '$lib';
</script>

<ContextMenu.Content class="w-full max-w-[250px] opacity-90 [&>*]:whitespace-nowrap">
	<ContextMenu.Sub>
		<ContextMenu.SubTrigger>
			<i class="ph ph-squares-four" />
			View
		</ContextMenu.SubTrigger>
		<ContextMenu.SubContent>
			<ContextMenu.RadioGroup value="medium">
				<ContextMenu.RadioItem value="large">
					<i class="ph ph-monitor" />
					Large icons
				</ContextMenu.RadioItem>
				<ContextMenu.RadioItem value="medium">
					<i class="ph ph-laptop" />
					Medium icons
				</ContextMenu.RadioItem>
				<ContextMenu.RadioItem value="small">
					<i class="ph ph-device-tablet-speaker" />
					Small icons
				</ContextMenu.RadioItem>
			</ContextMenu.RadioGroup>
		</ContextMenu.SubContent>
	</ContextMenu.Sub>
	<ContextMenu.Sub>
		<ContextMenu.SubTrigger>
			<i class="ph ph-arrows-down-up" />
			Sort By
		</ContextMenu.SubTrigger>
		<ContextMenu.SubContent>
			<ContextMenu.Item>Name</ContextMenu.Item>
			<ContextMenu.Item>Size</ContextMenu.Item>
			<ContextMenu.Item>Item type</ContextMenu.Item>
			<ContextMenu.Item>Date modified</ContextMenu.Item>
		</ContextMenu.SubContent>
	</ContextMenu.Sub>
	<ContextMenu.Item>
		<i class="ph ph-arrow-clockwise" />
		Refresh
	</ContextMenu.Item>
	<ContextMenu.Separator />
	<ContextMenu.Sub>
		<ContextMenu.SubTrigger>
			<i class="ph ph-plus-circle" />
			New
		</ContextMenu.SubTrigger>
		<ContextMenu.SubContent>
			<ContextMenu.Item>
				<i class="ph ph-folder" />
				Folder
			</ContextMenu.Item>
			<ContextMenu.Item>
				<i class="ph ph-file-text" />
				Text Document
			</ContextMenu.Item>
		</ContextMenu.SubContent>
	</ContextMenu.Sub>
	<ContextMenu.Separator />
	<ContextMenu.Item>
		<i class="ph ph-monitor" />
		Display settings
	</ContextMenu.Item>
	<ContextMenu.Item>
		<i class="ph ph-paint-brush" />
		Personalize
	</ContextMenu.Item>
	<ContextMenu.Separator />
	<ContextMenu.Item>
		<i class="ph ph-terminal-window" />
		Open in Terminal
	</ContextMenu.Item>
</ContextMenu.Content>
